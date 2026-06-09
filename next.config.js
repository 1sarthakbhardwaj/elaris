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
    ];
  },
};
