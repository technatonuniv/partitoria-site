import fs from 'node:fs';

const origin = 'https://partitoria.app';
const keyFile = '3b909daf287a4751b9fb0bd1099c1321.txt';
const key = fs.readFileSync(new URL(`../public/${keyFile}`, import.meta.url), 'utf8').trim();
if (`${key}.txt` !== keyFile) throw new Error('IndexNow key must match its published filename');

const args = process.argv.slice(2);
const usage = 'npm run indexnow -- [--submit] [/canonical/path ...] [--file changed-urls.txt]';
if (args.includes('--help')) {
  console.log(`${usage}\nDefault: print the payload without making a request. The file takes one URL or path per line.`);
  process.exit(0);
}
const sitemap = fs.readFileSync(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
const canonical = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));
const urls = new Set();
let submit = false;

function addUrl(input) {
  const url = new URL(input, origin);
  if ((!input.startsWith('/') && !input.startsWith(`${origin}/`)) || !canonical.has(url.href)) {
    throw new Error(`Expected a published canonical Partitoria URL or root-relative path: ${input}`);
  }
  urls.add(url.href);
}

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--submit') {
    submit = true;
  } else if (arg === '--file') {
    const filename = args[++i];
    if (!filename || filename.startsWith('--')) throw new Error(usage);
    for (const line of fs.readFileSync(filename, 'utf8').split(/\r?\n/)) {
      if (line.trim()) addUrl(line.trim());
    }
  } else {
    addUrl(arg);
  }
}
if (!urls.size || urls.size > 10000) throw new Error(`Supply 1–10,000 changed canonical URLs. ${usage}`);

const payload = { host: new URL(origin).host, key, keyLocation: `${origin}/${keyFile}`, urlList: [...urls] };
if (!submit) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  // Run only after the release and its key are publicly served.
  const ownership = await fetch(payload.keyLocation, { redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (ownership.status !== 200 || (await ownership.text()).trim() !== key) {
    throw new Error('The deployed IndexNow key does not match this release');
  }
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
    redirect: 'error',
    signal: AbortSignal.timeout(30000),
  });
  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow HTTP ${response.status}: ${await response.text()}`);
  }
  console.log(`IndexNow received ${urls.size} URL(s), HTTP ${response.status}.` +
    (response.status === 202 ? ' Key validation is pending.' : ''));
}
