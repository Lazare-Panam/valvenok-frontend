/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.valvenok.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/api/*',
    '/_not-found',
    // Account, cart and utility pages carry noindex; keep them out of the sitemap too
    '/account',
    '/account/*',
    '/cart',
    '/cart/*',
    '/login',
    '/register',
    '/track-order',
    '/sample', '/checkout', '/checkout/*', '/high-pressure/valves/needle-valves/products',
    '/products',
    '/categories/valves',
  ],
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