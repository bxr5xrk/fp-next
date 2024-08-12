/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://fp.if.ua",
  generateRobotsTxt: true,
  // output: process.env.NEXT_PUBLIC_MODE === "production" ? "export" : undefined,
};