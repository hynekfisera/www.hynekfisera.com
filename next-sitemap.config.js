/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.hynekfisera.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/404", "/500"],
};
