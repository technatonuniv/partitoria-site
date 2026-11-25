import fs from 'node:fs';
import articles from '../lib/guide-articles.json' with { type: 'json' };
import topicRoutes from '../lib/discovery-topics-routes.json' with { type: 'json' };
import selection from '../lib/guide-capture-selection.json' with { type: 'json' };

const entries = [];
// The 1.11.1 navigation instructions changed in all nine editions on 25 November.
// The start section also displays the revised introduction to find-your-way.
const revisedGuidePaths = new Set([
  '/guide/find-your-way', '/guide/import-inbox', '/guide/semantic-transfer',
  '/guide/paper-marks', '/guide/settings-and-account', '/guide/section/start',
  '/guide/smart-collections', '/guide/rehearsal-audio', '/guide/local-snapshots',
  '/guide/input-and-audio', '/guide/input-controls', '/guide/reading-profiles',
  '/guide/practice-tools', '/guide/concert-pdf',
]);
// These existing articles visibly replace a screenshot in the November 25 edition.
// Pin the route list so that a future illustrated article cannot inherit this date.
const refreshedIllustrations = new Set([
  'find-your-way', 'import-inbox', 'import-review', 'find-in-library',
  'collections-and-batch', 'smart-collections', 'library-health', 'practice-history',
  'reader', 'reading-profiles', 'annotations', 'programmes', 'practice-tools', 'input-and-audio',
  'versions-and-exchange', 'concert-pdf', 'input-controls', 'rehearsal-audio', 'paper-marks',
  'backup-restore', 'local-snapshots', 'settings-and-account', 'appearance', 'pro-and-owned-data',
].map(id => '/guide/' + id));
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
    const updated = section === '' || revisedGuidePaths.has(section) ||
      (selection.defaultVersionCode >= 11032 && refreshedIllustrations.has(section)) ||
      (section === '/guide/first-scores' && locale !== 'en');
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
