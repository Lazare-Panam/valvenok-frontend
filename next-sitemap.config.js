/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.valvenok.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_not-found'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/news': 0.9,
      '/brands': 0.8,
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] ?? 0.6,
    }
  },
}