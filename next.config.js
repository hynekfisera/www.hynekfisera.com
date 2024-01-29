const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/links",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
