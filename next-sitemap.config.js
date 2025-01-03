module.exports = {
    siteUrl: 'https://serendicus.com',
    generateRobotsTxt: true,
    exclude: ['/admin', '/dashboard'],
    changefreq: 'weekly',
    priority: 0.8,
    sitemapSize: 50000,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/secret'],
        },
      ],
    },
  };