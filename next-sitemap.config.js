/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.fisera.co",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/404", "/500"],
};
