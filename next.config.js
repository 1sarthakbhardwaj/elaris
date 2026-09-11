/** @type {import('next').NextConfig} */
const MINTLIFY_ORIGIN = "https://elarislabs-87.mintlify.site";

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Proxy Mintlify docs before local file/route matching.
      // Prefer rewrites over Edge middleware fetch — local Edge sandbox
      // often fails DNS/TLS for external hosts (TypeError: fetch failed).
      // /llms.txt is served from public/llms.txt (company card). Docs dump
      // stays at /llms-full.txt and /docs/llms.txt via Mintlify.
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
          source: "/llms-full.txt",
          destination: `${MINTLIFY_ORIGIN}/docs/llms-full.txt`,
        },
      ],
      afterFiles: [
        {
          source: "/use-cases",
          destination: "/use-cases/index.html",
        },
        {
          source: "/brand",
          destination: "/brand/index.html",
        },
        {
          source: "/brand/",
          destination: "/brand/index.html",
        },
        {
          source: "/blogs/seedance-2-5-vs-minimax-h3",
          destination:
            "/blogs/seedance-2-5-vs-minimax-h3/seedance-2-5-vs-minimax-h3.html",
        },
        {
          source: "/blogs/seedance-2-5-vs-minimax-h3/",
          destination:
            "/blogs/seedance-2-5-vs-minimax-h3/seedance-2-5-vs-minimax-h3.html",
        },
        {
          source: "/blogs/elaris-scrapegraph",
          destination: "/blogs/elaris-scrapegraph/elaris-scrapegraph-blog.html",
        },
        {
          source: "/blogs/elarislabs-marketing-journey",
          destination:
            "/blogs/elarislabs-marketing-journey/elarislabs-marketing-journey.html",
        },
        {
          source: "/blogs/elarislabs-marketing-journey/",
          destination:
            "/blogs/elarislabs-marketing-journey/elarislabs-marketing-journey.html",
        },
        {
          source: "/blogs/best-ai-ad-tools-arabic-rtl-2026",
          destination:
            "/blogs/best-ai-ad-tools-arabic-rtl-2026/best-ai-ad-tools-arabic-rtl-2026.html",
        },
        {
          source: "/blogs/best-ai-ad-tools-arabic-rtl-2026/",
          destination:
            "/blogs/best-ai-ad-tools-arabic-rtl-2026/best-ai-ad-tools-arabic-rtl-2026.html",
        },
        {
          source: "/blogs/homesrus-530-variants",
          destination: "/blogs/homesrus-530-variants/homesrus-530-variants.html",
        },
        {
          source: "/blogs/homesrus-530-variants/",
          destination: "/blogs/homesrus-530-variants/homesrus-530-variants.html",
        },
        {
          source: "/blogs/mcdonalds-qatar-live-dooh",
          destination:
            "/blogs/mcdonalds-qatar-live-dooh/mcdonalds-qatar-live-dooh.html",
        },
      ],
    };
  },
};
