/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.valvenok.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    // Hidden 10 Nov 2026: SRA moved to the SPAC Pneumatic website (page kept until clean-up)
    "/pneumatic/actuators/sra",
    "/pneumatic/actuators/sra/*",
    // Hidden 10 Nov 2026: KOSAPLUS has its own website (pages kept until clean-up)
    "/pneumatic/actuators/scotch-yoke",
    "/pneumatic/actuators/scotch-yoke/*",
    "/actuators/electric/ke-series",
    "/actuators/electric/ke-series/*",
    "/actuators/limit-switches/kls",
    "/actuators/limit-switches", // replaced by /actuators/accessories
    "/brands/kosaplus",
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
    '/sample', '/checkout', '/checkout/*',
    '/products',
    '/categories/valves',
    '/high-pressure/valves/gas-valves',
    // Unused old copies, kept live until the clean-up task (vk-z1) redirects them;
    // the new pages under /high-pressure/valves/... are the ones in the sitemap
    '/high-pressure/needle-valves',
    '/high-pressure/needle-valves/*',
    '/high-pressure/ball-valves',
    '/high-pressure/ball-valves/*',
    '/high-pressure/dbb',
    '/high-pressure/dbb/*',
    '/hydrogen-cryogenic/gas-valves',
    '/hydrogen-cryogenic/gas-valves/*',
    // Not linked from anywhere (overlaps /valves); decide at clean-up
    '/valves/industrial-valves',
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
      // Build date, so Google sees when pages were last deployed
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}