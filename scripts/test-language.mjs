import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import test from 'node:test';
const code = readFileSync(new URL('../public/language-preference.js', import.meta.url), 'utf8');
function visit({ path = '/', language = 'ru-RU', languages, translations = [], saved = null, blocked = false, search = '', hash = '' } = {}) {
  let redirect, assigned, cleanUrl, click, pop, written, removed = false;
  const location = {
    origin: 'https://partitoria.app', pathname: path, search, hash,
    get href() { return this.origin + this.pathname + this.search + this.hash; },
    replace(value) { redirect = value; }, assign(value) { assigned = value; },
  };
  const historyState = { app: 'preserved' };
  const document = {
    documentElement: {},
    querySelectorAll: () => translations.map(language => ({ dataset: { language } })),
    addEventListener: (_, fn) => { click = fn; },
  };
  vm.runInNewContext(code, {
    URL, URLSearchParams, Date, document, navigator: { language, languages }, location,
    window: { addEventListener: (name, fn) => { if (name === 'popstate') pop = fn; } },
    history: { state: historyState, replaceState(state, _, url) { assert.equal(state, historyState); cleanUrl = url; } },
    localStorage: {
      getItem: () => { if (blocked) throw Error(); return JSON.stringify(saved); },
      setItem: (_, value) => { if (blocked) throw Error(); written = JSON.parse(value); },
      removeItem: () => { removed = true; },
    },
  });
  return { get redirect() { return redirect; }, get cleanUrl() { return cleanUrl; }, get written() { return written; }, document,
    popTo(pathname, search = '', hash = '') { Object.assign(location, { pathname, search, hash }); pop(); return redirect; },
    follow(href, { choice, ...modifiers } = {}) {
      let prevented = false;
      const anchor = { href, dataset: { language: choice }, hasAttribute: () => false };
      click({ button: 0, ...modifiers, preventDefault() { prevented = true; }, target: {
        closest: selector => selector === 'a[href]' || (choice && selector === 'a[data-language]') ? anchor : null,
      } });
      return { assigned, prevented };
    },
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

test('automatic language selection and reset use an existing translation', () => {
  const options = { language: 'pl', translations: ['en', 'ru'], path: '/answers/example' };
  assert.equal(visit(options).redirect, '/en/answers/example');
  assert.equal(visit({ ...options, search: '?lang=ru' }).redirect, undefined);
  assert.equal(visit({ ...options, path: '/en/answers/example' }).reset().redirect, '/en/answers/example');
});

const marker = '__partitoria_facts_v1=ru';
const savedFrench = { locale: 'fr', expires: Date.now() + 86400000 };

test('neutral facts chooses a requested, saved or browser language; unsupported falls back to English', () => {
  assert.equal(visit({ path: '/facts', language: 'ja' }).redirect, '/en/facts');
  assert.equal(visit({ path: '/facts', language: 'de-AT' }).redirect, '/de/facts');
  assert.equal(visit({ path: '/facts', saved: savedFrench, language: 'de' }).redirect, '/fr/facts');
  const russian = visit({ path: '/facts', language: 'en', saved: savedFrench,
    search: '?tag=a%20b&lang=ru&tag=c', hash: '#install' });
  assert.equal(russian.redirect, '/ru/facts?tag=a%20b&lang=ru&tag=c&' + marker + '#install');
  assert.equal(russian.written, undefined);
});

test('explicit facts language is stable on direct entry, conflicting hints and refresh', () => {
  const explicitRussian = visit({ path: '/ru/facts', language: 'en', saved: savedFrench, search: '?lang=en' });
  assert.equal(explicitRussian.redirect, undefined);
  assert.equal(explicitRussian.cleanUrl, undefined);
  assert.equal(explicitRussian.document.documentElement.lang, 'ru');
  for (const language of ['ru','en','de','it','es','pt','uk','fr','pl']) {
    const page = visit({ path: '/' + language + '/facts', language: 'en', saved: savedFrench, search: '?lang=pt' });
    assert.equal(page.redirect, undefined);
    assert.equal(page.cleanUrl, undefined);
    assert.equal(page.document.documentElement.lang, language);
    assert.equal(page.written, undefined);
  }
});

test('a cached Russian 301 is bypassed once, preserving query, fragment and history state', () => {
  const options = { path: '/facts', language: 'ru-RU', search: '?utm=a%20b&u=1&u=2', hash: '#privacy', blocked: true };
  const entry = visit(options);
  const target = new URL(entry.redirect, 'https://partitoria.app');
  assert.equal(target.pathname, '/ru/facts');
  assert.equal(target.search, options.search + '&' + marker);
  const russian = visit({ ...options, path: target.pathname, search: target.search, language: 'en' });
  assert.equal(russian.cleanUrl, '/ru/facts' + options.search + options.hash);
  assert.equal(russian.redirect, undefined);
  assert.equal(russian.document.documentElement.lang, 'ru');
  assert.equal(russian.written, undefined);
  const clean = new URL(russian.cleanUrl, target);
  const refresh = visit({ path: clean.pathname, search: clean.search, hash: clean.hash, language: 'en' });
  assert.equal(refresh.redirect, undefined);
  assert.equal(refresh.cleanUrl, undefined);
  // A still-old response (or repeated direct input) returns the marked query to /facts.
  const fallback = visit({ ...options, path: '/facts', search: target.search });
  assert.equal(fallback.redirect, undefined);
  assert.equal(fallback.cleanUrl, undefined);
  assert.equal(fallback.document.documentElement.lang, 'en');
  assert.equal(fallback.written, undefined);
});

test('neutral facts links from a client-rendered page and back navigation use language negotiation', () => {
  const page = visit({ path: '/de/guide', language: 'ru', saved: savedFrench });
  assert.deepEqual(page.follow('/facts?q=a#open'), { assigned: '/fr/facts?q=a#open', prevented: true });
  assert.equal(page.popTo('/facts', '?lang=en', '#open'), '/en/facts?lang=en#open');
  assert.equal(page.written, undefined);
  for (const href of ['/support', '/de/facts', 'https://example.org/facts']) {
    assert.equal(visit({ path: '/en' }).follow(href).prevented, false);
  }
  assert.equal(visit({ path: '/en' }).follow('/facts', { ctrlKey: true }).prevented, false);
});

test('facts edition switching and reset preserve campaign parameters and section; reset clears manual language', () => {
  const page = visit({ path: '/pl/facts', language: 'ru', saved: savedFrench,
    search: '?utm=test&lang=pl', hash: '#library' });
  assert.deepEqual(page.follow('/de/facts?lang=de', { choice: 'de' }),
    { assigned: '/de/facts?utm=test&lang=de#library', prevented: true });
  assert.equal(page.written.locale, 'de');
  assert.deepEqual(page.reset(), { removed: true, redirect: '/ru/facts?utm=test#library' });
});
