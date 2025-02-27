/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mobilekangaroo.com/',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          disallow: '/private/',
        },
      ],
    },
  };
  