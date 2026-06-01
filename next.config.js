/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/use-cases",
        destination: "/use-cases/index.html",
      },
    ];
  },
};
