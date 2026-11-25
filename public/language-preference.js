// eslint-disable-next-line no-unused-vars
function languagePreference() {
  'use strict';
  const supported = ['ru', 'en', 'de', 'it', 'es', 'pt', 'uk', 'fr', 'pl'];
  const key = 'partitoria.language.v1';
  // The old permanent /ru/facts -> /facts redirect may still be in a browser cache.
  const factsMarker = '__partitoria_facts_v1=ru';
  const factsPath = /^(?:\/[a-z]{2})?\/facts$/;
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
  function available(locale) {
    const alternatives = Array.from(document.querySelectorAll('a[data-language]'), link => link.dataset.language);
    return alternatives.length && !alternatives.includes(locale) ? 'en' : locale;
  }
  function preferredFor(search) {
    const requested = new URLSearchParams(search).get('lang');
    return supported.includes(requested) ? requested : selected || normalize(preferred);
  }
  function hasFactsMarker(search) {
    return search.slice(1).split('&').includes(factsMarker);
  }
  function factsDestination(language, search, hash) {
    if (language === 'ru') search += (search ? '&' : '?') + factsMarker;
    return '/' + language + '/facts' + search + hash;
  }
  function handleFactsEntry() {
    if (location.pathname === '/facts') {
      // If even the cache-busted request was redirected back, keep the English fallback.
      document.documentElement.lang = 'en';
      if (!hasFactsMarker(location.search)) {
        location.replace(factsDestination(preferredFor(location.search), location.search, location.hash));
      }
      return true;
    }
    if (location.pathname === '/ru/facts' && hasFactsMarker(location.search)) {
      const query = location.search.slice(1).split('&').filter(part => part !== factsMarker).join('&');
      history.replaceState(history.state, '', location.pathname + (query ? '?' + query : '') + location.hash);
    }
    return false;
  }
  if (!handleFactsEntry()) {
    const segment = location.pathname.split('/')[1];
    const explicit = supported.includes(segment);
    const language = explicit ? segment : available(preferredFor(location.search));
    document.documentElement.lang = language;
    if (!explicit && language !== 'ru') {
      location.replace('/' + language + (location.pathname === '/' ? '' : location.pathname) + location.search + location.hash);
    }
  }
  window.addEventListener('popstate', handleFactsEntry);
  document.addEventListener('click', function (event) {
    const reset = event.target.closest && event.target.closest('[data-language-reset]');
    if (reset) {
      event.preventDefault();
      try { localStorage.removeItem(key); } catch { /* Optional storage. */ }
      selected = undefined;
      const segment = location.pathname.split('/')[1];
      const path = supported.includes(segment) ? location.pathname.slice(segment.length + 1) : location.pathname;
      const browserLanguage = available(normalize(preferred));
      if (path === '/facts') {
        const query = new URLSearchParams(location.search);
        query.delete('lang');
        query.delete('__partitoria_facts_v1', 'ru');
        const search = query.size ? '?' + query : '';
        const target = location.pathname === '/facts' ? factsDestination(browserLanguage, search, location.hash)
          : '/' + browserLanguage + '/facts' + search + location.hash;
        location.replace(target);
        return;
      }
      location.replace((browserLanguage === 'ru' ? '' : '/' + browserLanguage) + (path || '/'));
      return;
    }
    const link = event.target.closest && event.target.closest('a[data-language]');
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (link) {
      selected = normalize(link.dataset.language);
      try {
        localStorage.setItem(key, JSON.stringify({ locale: selected, expires: Date.now() + lifetime }));
      } catch { /* Navigation remains available without persistent storage. */ }
    }
    // A client-side transition would not execute this document script again.
    const anchor = link || (event.target.closest && event.target.closest('a[href]'));
    if (!anchor || !anchor.href || anchor.target && anchor.target !== '_self' || anchor.hasAttribute('download')) return;
    const url = new URL(anchor.href, location.href);
    if (url.origin !== location.origin) return;
    if (link && factsPath.test(location.pathname) && factsPath.test(url.pathname)) {
      // Switching editions keeps campaign parameters and the reader's fragment.
      const query = new URLSearchParams(location.search);
      query.delete('__partitoria_facts_v1', 'ru');
      query.set('lang', selected);
      event.preventDefault();
      location.assign('/' + selected + '/facts?' + query + location.hash);
    } else if (url.pathname === '/facts' && !hasFactsMarker(url.search)) {
      event.preventDefault();
      location.assign(factsDestination(preferredFor(url.search), url.search, url.hash));
    }
  }, true);
}
languagePreference();
