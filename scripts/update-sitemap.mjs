import fs from 'node:fs';
import articles from '../lib/guide-articles.json' with { type: 'json' };
import topicRoutes from '../lib/discovery-topics-routes.json' with { type: 'json' };

const entries = [];
for (const locale of ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl']) {
  const base = locale === 'ru' ? '' : `/${locale}`;
  const sections = [
    '',
    '/guide',
    '/support',
    '/privacy',
    '/terms',
    '/copyright',
    '/sources',
    ...['start', 'library', 'reading', 'rehearsal', 'data', 'settings'].map(
      (c) => `/guide/section/${c}`,
    ),
    ...articles.map((a) => `/guide/${a.id}`),
  ];
  for (const section of sections) {
    // The home copy and eight localized first-scores articles were corrected on this date.
    const updated = section === '' || (section === '/guide/first-scores' && locale !== 'en');
    entries.push({ path: `${base}${section}` || '/', lastmod: updated ? '2026-11-25' : undefined });
  }
  entries.push({ path: `/${locale}/facts`, lastmod: '2026-11-25' });
  for (const [slug, translations] of Object.entries(topicRoutes)) {
    if (translations[locale]) {
      entries.push({ path: `${base}/answers/${slug}`, lastmod: translations[locale] });
    }
  }
}
fs.writeFileSync(
  'public/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    entries
      .map(({ path, lastmod }) =>
        `  <url><loc>https://partitoria.app${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`,
      )
      .join('\n') +
    '\n</urlset>\n',
);
console.log(`Sitemap: ${entries.length} canonical pages`);
