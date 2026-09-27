import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const code = readFileSync(new URL('../public/language-preference.js', import.meta.url), 'utf8');
function visit({ path = '/', language = 'ru-RU', languages, saved = null, blocked = false, search = '', hash = '' } = {}) {
  let redirect, click, written, removed = false;
  const document = { documentElement: {}, addEventListener: (_, fn) => { click = fn; } };
  vm.runInNewContext(code, {
    URLSearchParams, Date, document, navigator: { language, languages },
    location: { pathname: path, search, hash, replace: value => { redirect = value; } },
    localStorage: {
      getItem: () => { if (blocked) throw Error(); return JSON.stringify(saved); },
      setItem: (_, value) => { if (blocked) throw Error(); written = JSON.parse(value); },
      removeItem: () => { removed = true; },
    },
  });
  return { redirect, document,
    reset: () => { click({ preventDefault() {}, target: { closest: selector => selector === '[data-language-reset]' ? {} : null } }); return { removed, redirect }; },
    choose: locale => { click({ button: 0, target: { closest: selector => selector === 'a[data-language]' ? ({ dataset: { language: locale } }) : null } }); return written; } };
}
test('first visit uses primary browser language, unsupported defaults to English', () => {
  assert.equal(visit({ language: 'pt-BR', path: '/guide', search: '?q=pdf', hash: '#steps' }).redirect, '/pt/guide?q=pdf#steps');
  assert.equal(visit({ language: 'ja-JP' }).redirect, '/en');
  assert.equal(visit().redirect, undefined);
  assert.equal(visit({ language: 'en', languages: ['fr-CA', 'en'] }).redirect, '/fr');
  assert.equal(visit({ languages: ['ja', 'ru'] }).redirect, '/en');
});
test('manual selection survives a fresh visit and takes priority over browser language', () => {
  const saved = visit().choose('de');
  assert.equal(visit({ saved, language: 'fr' }).redirect, '/de');
  assert.ok(saved.expires > Date.now());
  assert.equal(visit({ saved: { locale: 'de', expires: 0 }, language: 'pl' }).redirect, '/pl');
});
test('explicit translated URLs, Russian links and denied storage remain usable', () => {
  assert.equal(visit({ path: '/fr/guide', language: 'ru' }).redirect, undefined);
  assert.equal(visit({ language: 'en', blocked: true, search: '?lang=ru' }).redirect, undefined);
  assert.doesNotThrow(() => visit({ blocked: true }).choose('de'));
  assert.equal(visit({ language: 'en', search: '?lang=invalid' }).redirect, '/en?lang=invalid');
});
test('forgetting a saved language returns to the browser language on the same article', () => {
  const result = visit({ path: '/de/guide/import', language: 'fr' }).reset();
  assert.deepEqual(result, { removed: true, redirect: '/fr/guide/import' });
});
