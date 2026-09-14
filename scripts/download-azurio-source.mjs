import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const DEPLOYMENT_ID = "dpl_6KYQ2NdfG3FgKpnNY1n81WjMktL5";
const TEAM_ID = "team_biYAmRwnFFzXRXjvL8v1s5n9";
const OUT_DIR = path.join(process.cwd(), "azurio_source");
const CONCURRENCY = 4;
const MAX_RETRIES = 8;

const auth = JSON.parse(
  fs.readFileSync(
    path.join(os.homedir(), "Library/Application Support/com.vercel.cli/auth.json"),
    "utf8",
  ),
);
const token = auth.token || auth.accessToken;
if (!token) {
  throw new Error("No Vercel CLI token found. Run `vercel login` first.");
}

function flatten(nodes, prefix = "") {
  const files = [];
  for (const node of nodes) {
    const rel = prefix ? `${prefix}/${node.name}` : node.name;
    if (node.children || node.type === "directory") {
      if (node.children) files.push(...flatten(node.children, rel));
      continue;
    }
    if (!node.uid) continue;
    files.push({ path: rel, uid: node.uid });
  }
  return files;
}

async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  const text = await res.text();
  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = text;
  }
  return { res, body };
}

async function downloadFile(file) {
  const url = `https://api.vercel.com/v8/deployments/${DEPLOYMENT_ID}/files/${file.uid}?teamId=${TEAM_ID}`;
  let lastError;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    try {
      const { res, body } = await fetchJson(url);
      if (res.status === 429) {
        const wait = Math.min(30_000, 1000 * 2 ** attempt);
        await sleep(wait);
        continue;
      }
      if (!res.ok) {
        lastError = new Error(`${res.status} ${typeof body === "string" ? body : JSON.stringify(body)}`);
        await sleep(500 * attempt);
        continue;
      }
      const data = body?.data;
      if (typeof data !== "string") {
        throw new Error(`Missing data for ${file.path}`);
      }
      const dest = path.join(OUT_DIR, file.path);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, Buffer.from(data, "base64"));
      return { ok: true, bytes: Buffer.from(data, "base64").length };
    } catch (error) {
      lastError = error;
      await sleep(500 * attempt);
    }
  }
  return { ok: false, error: lastError };
}

const treeRes = await fetchJson(
  `https://api.vercel.com/v6/deployments/${DEPLOYMENT_ID}/files?teamId=${TEAM_ID}`,
);
if (!Array.isArray(treeRes.body)) {
  throw new Error(`Could not list files: ${JSON.stringify(treeRes.body).slice(0, 500)}`);
}

const files = flatten(treeRes.body);
fs.mkdirSync(OUT_DIR, { recursive: true });
console.log(`Downloading ${files.length} files to ${OUT_DIR}`);

let downloaded = 0;
let failed = 0;
let bytes = 0;
const failures = [];
let index = 0;

async function worker() {
  while (index < files.length) {
    const current = files[index];
    index += 1;
    const result = await downloadFile(current);
    if (result.ok) {
      downloaded += 1;
      bytes += result.bytes;
    } else {
      failed += 1;
      failures.push({ path: current.path, error: String(result.error) });
    }
    if ((downloaded + failed) % 25 === 0 || downloaded + failed === files.length) {
      console.log(
        `Progress ${downloaded + failed}/${files.length}  ok=${downloaded}  fail=${failed}  ${(bytes / 1024 / 1024).toFixed(1)} MB`,
      );
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

const logPath = path.join(OUT_DIR, "download-log.txt");
fs.writeFileSync(
  logPath,
  [
    `deployment: ${DEPLOYMENT_ID}`,
    `files listed: ${files.length}`,
    `downloaded: ${downloaded}`,
    `failed: ${failed}`,
    `bytes: ${bytes}`,
    "",
    ...failures.map((f) => `FAIL ${f.path} :: ${f.error}`),
  ].join("\n"),
);

console.log(`Done. downloaded=${downloaded} failed=${failed} size=${(bytes / 1024 / 1024).toFixed(1)} MB`);
if (failures.length) {
  console.log(`Failures written to ${logPath}`);
  process.exitCode = 1;
}
