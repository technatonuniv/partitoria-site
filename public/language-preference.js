// eslint-disable-next-line no-unused-vars
function languagePreference() {
  'use strict';
  const supported = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'];
  const key = 'partitoria.language.v1';
  const lifetime = 180 * 24 * 60 * 60 * 1000;
  const preferred = (navigator.languages && navigator.languages[0]) || navigator.language;
  function normalize(value) {
    const language = String(value || '').toLowerCase().replace('_', '-').split('-')[0];
    return supported.indexOf(language) >= 0 ? language : 'en';
  }
  let selected;
  try {
    const saved = JSON.parse(localStorage.getItem(key) || 'null');
    if (saved && supported.indexOf(saved.locale) >= 0 && saved.expires > Date.now()) selected = saved.locale;
    else if (saved) localStorage.removeItem(key);
  } catch { /* Storage can be disabled; language links must still work. */ }
  const segment = location.pathname.split('/')[1];
  const explicit = supported.indexOf(segment) >= 0;
  const requested = new URLSearchParams(location.search).get('lang');
  const language = explicit ? segment : supported.indexOf(requested) >= 0 ? requested : selected || normalize(preferred);
  document.documentElement.lang = language;
  if (!explicit && language !== 'ru') {
    location.replace('/' + language + (location.pathname === '/' ? '' : location.pathname) + location.search + location.hash);
  }
  document.addEventListener('click', function (event) {
    const reset = event.target.closest && event.target.closest('[data-language-reset]');
    if (reset) {
      event.preventDefault();
      try { localStorage.removeItem(key); } catch { /* Optional storage. */ }
      const path = explicit ? location.pathname.slice(segment.length + 1) : location.pathname;
      const browserLanguage = normalize(preferred);
      location.replace((browserLanguage === 'ru' ? '' : '/' + browserLanguage) + (path || '/'));
      return;
    }
    const link = event.target.closest && event.target.closest('a[data-language]');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    try {
      localStorage.setItem(key, JSON.stringify({ locale: normalize(link.dataset.language), expires: Date.now() + lifetime }));
    } catch { /* Navigation remains available without persistent storage. */ }
  });
}
languagePreference();
