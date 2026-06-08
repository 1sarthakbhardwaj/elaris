/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/use-cases",
        destination: "/use-cases/index.html",
      },
      {
        source: "/blogs/elaris-scrapegraph",
        destination: "/blogs/elaris-scrapegraph/elaris-scrapegraph-blog.html",
      },
    ];
  },
};
