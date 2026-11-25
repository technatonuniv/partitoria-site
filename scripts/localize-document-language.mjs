import fs from 'node:fs';
import path from 'node:path';

// vinext renders the root layout before the nested locale parameter is available.
// Use the server-rendered language of the page for the exported document as well.
const root = 'dist/client';
let updated = 0;
for (const relative of fs.readdirSync(root, { recursive: true })) {
  if (!relative.endsWith('.html')) continue;
  const file = path.join(root, relative);
  const html = fs.readFileSync(file, 'utf8');
  const lang = html.match(/<main\b[^>]*\slang="([a-z]{2})"/i)?.[1];
  if (!lang) continue;
  const localized = html.replace(/<html\b[^>]*>/i, (tag) => tag.replace(/\blang="[^"]*"/i, `lang="${lang}"`));
  if (localized !== html) {
    fs.writeFileSync(file, localized);
    updated++;
  }
}
console.log(`Localized the document language in ${updated} exported HTML files.`);
