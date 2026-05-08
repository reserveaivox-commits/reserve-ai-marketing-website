import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://re-serveai.com';
  const locales = ['en', 'de'];
  const routes = [
    '',
    '/services',
    '/pricing',
    '/contact',
    '/industries',
    '/restaurants',
    '/salons',
    '/spas',
    '/mauritius',
    '/germany'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
