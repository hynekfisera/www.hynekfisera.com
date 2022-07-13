/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://www.fisera.co",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/404", "/500"],
};

export default config;
