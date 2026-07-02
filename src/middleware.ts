import { NextRequest, NextResponse } from "next/server";

const MINTLIFY_HOST = "elarislabs-87.mintlify.site";
const CUSTOM_DOMAIN = "elarislabs.ai";

export const config = {
  matcher: [
    "/docs",
    "/docs/:path*",
    "/.well-known/vercel/:path*",
    "/llms.txt",
    "/llms-full.txt",
  ],
};

function resolveMintlifyPath(pathname: string): string {
  if (pathname === "/llms.txt") return "/docs/llms.txt";
  if (pathname === "/llms-full.txt") return "/docs/llms-full.txt";
  return pathname;
}

function buildMintlifyUrl(request: NextRequest): string {
  const target = new URL(request.url);
  target.hostname = MINTLIFY_HOST;
  target.protocol = "https:";
  target.pathname = resolveMintlifyPath(target.pathname);
  return target.toString();
}

function buildProxyHeaders(request: NextRequest): Headers {
  const headers = new Headers();

  headers.set("x-forwarded-host", CUSTOM_DOMAIN);
  headers.set("x-forwarded-proto", "https");

  const forwardedFor =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip");
  if (forwardedFor) {
    headers.set("x-forwarded-for", forwardedFor);
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    headers.set("x-real-ip", realIp);
  }

  const userAgent = request.headers.get("user-agent");
  if (userAgent) {
    headers.set("user-agent", userAgent);
  }

  const accept = request.headers.get("accept");
  if (accept) {
    headers.set("accept", accept);
  }

  return headers;
}

export async function middleware(request: NextRequest) {
  const targetUrl = buildMintlifyUrl(request);
  const upstream = await fetch(targetUrl, {
    method: request.method,
    headers: buildProxyHeaders(request),
    redirect: "manual",
    body:
      request.method !== "GET" && request.method !== "HEAD"
        ? request.body
        : undefined,
  });

  const responseHeaders = new Headers(upstream.headers);
  responseHeaders.set("x-docs-proxy", "1");
  responseHeaders.set("x-docs-upstream-status", String(upstream.status));

  return new NextResponse(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: responseHeaders,
  });
}
