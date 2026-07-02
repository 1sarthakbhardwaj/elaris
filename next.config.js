/** @type {import('next').NextConfig} */

// Mintlify docs are hosted on Mintlify's infrastructure and proxied at
// elarislabs.ai/docs. Replace with the subdomain identifier from your Mintlify
// dashboard URL (app.mintlify.com/<org>/<subdomain>), e.g. "elarislabs".
const DOCS_SUBDOMAIN = process.env.DOCS_MINTLIFY_SUBDOMAIN || "ELARIS_DOCS_SUBDOMAIN";
const DOCS_ORIGIN = `https://${DOCS_SUBDOMAIN}.mintlify.site`;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // beforeFiles runs before the filesystem and page routes, so the docs
      // proxy owns /docs even though the Next app also has routes.
      beforeFiles: [
        {
          source: "/docs",
          destination: `${DOCS_ORIGIN}/docs`,
        },
        {
          source: "/docs/:match*",
          destination: `${DOCS_ORIGIN}/docs/:match*`,
        },
        {
          source: "/.well-known/vercel/:match*",
          destination: `${DOCS_ORIGIN}/.well-known/vercel/:match*`,
        },
        {
          source: "/llms.txt",
          destination: `${DOCS_ORIGIN}/docs/llms.txt`,
        },
        {
          source: "/llms-full.txt",
          destination: `${DOCS_ORIGIN}/docs/llms-full.txt`,
        },
      ],
      afterFiles: [
        {
          source: "/use-cases",
          destination: "/use-cases/index.html",
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
          source: "/blogs/mcdonalds-qatar-live-dooh",
          destination:
            "/blogs/mcdonalds-qatar-live-dooh/mcdonalds-qatar-live-dooh.html",
        },
      ],
    };
  },
};
