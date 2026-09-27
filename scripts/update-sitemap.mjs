import fs from 'node:fs';
import articles from '../lib/guide-articles.json' with { type: 'json' };

const paths = [];
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
  paths.push(...sections.map((section) => `${base}${section}` || '/'));
}
fs.writeFileSync(
  'public/sitemap.xml',
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths
      .map((p) => `  <url><loc>https://partitoria.app${p}</loc></url>`)
      .join('\n') +
    '\n</urlset>\n',
);
console.log(`Sitemap: ${paths.length} canonical pages`);
