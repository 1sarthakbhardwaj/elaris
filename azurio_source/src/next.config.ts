import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const MINTLIFY_ORIGIN = "https://elarislabs-87.mintlify.site";
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/docs",
          destination: `${MINTLIFY_ORIGIN}/docs`,
        },
        {
          source: "/docs/:path*",
          destination: `${MINTLIFY_ORIGIN}/docs/:path*`,
        },
        {
          source: "/.well-known/vercel/:path*",
          destination: `${MINTLIFY_ORIGIN}/.well-known/vercel/:path*`,
        },
        {
          source: "/llms.txt",
          destination: `${MINTLIFY_ORIGIN}/docs/llms.txt`,
        },
        {
          source: "/llms-full.txt",
          destination: `${MINTLIFY_ORIGIN}/docs/llms-full.txt`,
        },
      ],
    };
  },
};

export default nextConfig;
