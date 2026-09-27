'use client';

import { useDeferredValue, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown, Search, X } from 'lucide-react';
import { Screenshot } from './screenshot';
import type { GuideCategory } from '@/lib/guide-content';
import {
  normalizeGuideSearch,
  type GuideNavigationCopy,
} from '@/lib/guide-navigation';
import { localePath, type Locale, type siteCopy } from '@/lib/site-content';

export type LocalizedArticle = {
  id: string;
  category: GuideCategory;
  title: string;
  introduction: string;
  steps: string[];
  image?: string;
  access?: string;
};
type Props = {
  locale: Locale;
  articles: LocalizedArticle[];
  articleId?: string;
  category?: GuideCategory;
  names: Record<GuideCategory, string>;
  copy: (typeof siteCopy)[Locale];
  navigation: GuideNavigationCopy;
};
const categories: GuideCategory[] = [
  'start',
  'library',
  'reading',
  'rehearsal',
  'data',
  'settings',
];

export function GuideBrowser({
  locale,
  articles,
  articleId,
  category,
  names,
  copy: t,
  navigation: n,
}: Props) {
  const current = articles.find((a) => a.id === articleId);
  const activeCategory = current?.category ?? category;
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<GuideCategory | undefined>(
    activeCategory,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const base = localePath(locale, '/guide');
  const articleUrl = (id: string) => `${base}/${id}`;
  const categoryUrl = (id: GuideCategory) => `${base}/section/${id}`;
  useEffect(() => {
    const legacyId = window.location.hash.slice(1);
    if (!articleId && articles.some((a) => a.id === legacyId)) {
      window.location.replace(`${base}/${legacyId}`);
      return;
    }
    const restore = () =>
      setQuery(new URLSearchParams(window.location.search).get('q') ?? '');
    const frame = requestAnimationFrame(restore);
    window.addEventListener('popstate', restore);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('popstate', restore);
    };
  }, [articleId, articles, base]);
  const index = useMemo(
    () =>
      articles.map((a) => ({
        article: a,
        text: normalizeGuideSearch(
          [a.title, a.introduction, ...a.steps, names[a.category]].join(' '),
          locale,
        ),
      })),
    [articles, locale, names],
  );
  const normalized = normalizeGuideSearch(deferredQuery, locale);
  const aliases: Record<string, string> = {
    бэкап: 'резерв',
    бекап: 'резерв',
    аннотации: 'помет',
  };
  const terms = (aliases[normalized] ?? normalized)
    .split(/\s+/)
    .filter(Boolean);
  const results = index
    .filter((entry) => terms.every((term) => entry.text.includes(term)))
    .map((entry) => entry.article);
  const searching = query.trim().length > 0;
  const directoryPage = !current && !category;
  const overview = directoryPage && !searching;
  const SearchHeading = directoryPage ? 'h2' : 'h1';
  const siblings = articles.filter((a) => a.category === activeCategory);
  const position = siblings.findIndex((a) => a.id === current?.id);
  function updateQuery(value: string) {
    setQuery(value);
    const url = new URL(window.location.href);
    if (value.trim()) url.searchParams.set('q', value);
    else url.searchParams.delete('q');
    window.history.replaceState(window.history.state, '', url);
  }
  function articleList(items: LocalizedArticle[]) {
    return (
      <ul className="guide-topic-list">
        {items.map((a) => (
          <li key={a.id}>
            <a href={articleUrl(a.id)}>
              <span>{a.title}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <p>{a.introduction}</p>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div id="content" className="guide-v2">
      {directoryPage && (
        <section className="guide-opening">
          <h1>{t.guideTitle}</h1>
          <p>{n.lead}</p>
        </section>
      )}
      <div className="guide-toolbar">
        {!directoryPage && (
          <a className="guide-return" href={base}>
            <ArrowLeft size={17} aria-hidden="true" />
            {n.back}
          </a>
        )}
        <div className="guide-search-field">
          <label htmlFor="guide-search-input" className="visually-hidden">
            {t.search}
          </label>
          <Search size={20} aria-hidden="true" />
          <input
            id="guide-search-input"
            type="search"
            value={query}
            placeholder={t.search}
            autoComplete="off"
            onChange={(e) => updateQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') updateQuery('');
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => updateQuery('')}
              aria-label={n.clear}
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>
        {!overview && !searching && (
          <button
            type="button"
            className="guide-mobile-toggle"
            aria-expanded={mobileOpen}
            aria-controls="guide-navigation"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {n.sections}
            <ChevronDown size={18} aria-hidden="true" />
          </button>
        )}
      </div>
      {searching ? (
        <section
          className="guide-search-results"
          aria-labelledby="search-heading"
        >
          <SearchHeading id="search-heading">{t.search}</SearchHeading>
          <output aria-live="polite">
            {t.results}: {results.length}
          </output>
          {results.length ? articleList(results) : <p>{t.empty}</p>}
        </section>
      ) : overview ? (
        <div className="guide-directory">
          {categories.map((key, i) => (
            <section key={key} className="guide-directory-section">
              <span className="guide-section-number" aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <h2>
                  <a href={categoryUrl(key)}>{names[key]}</a>
                </h2>
                <ul>
                  {articles
                    .filter((a) => a.category === key)
                    .slice(0, 3)
                    .map((a) => (
                      <li key={a.id}>
                        <a href={articleUrl(a.id)}>{a.title}</a>
                      </li>
                    ))}
                </ul>
                <a className="guide-section-more" href={categoryUrl(key)}>
                  {t.results}:{' '}
                  {articles.filter((a) => a.category === key).length}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="guide-reading-layout">
          <nav
            id="guide-navigation"
            className={`guide-navigation ${mobileOpen ? 'is-open' : ''}`}
            aria-label={n.sections}
          >
            {categories.map((key) => (
              <div className="guide-nav-group" key={key}>
                <button
                  type="button"
                  aria-expanded={expanded === key}
                  aria-controls={`guide-nav-${key}`}
                  onClick={() =>
                    setExpanded(expanded === key ? undefined : key)
                  }
                >
                  {names[key]}
                  <ChevronDown
                    className={expanded === key ? 'is-expanded' : ''}
                    size={16}
                    aria-hidden="true"
                  />
                </button>
                <ul id={`guide-nav-${key}`} hidden={expanded !== key}>
                  {articles
                    .filter((a) => a.category === key)
                    .map((a) => (
                      <li key={a.id}>
                        <a
                          href={articleUrl(a.id)}
                          aria-current={
                            current?.id === a.id ? 'page' : undefined
                          }
                        >
                          {a.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="guide-reading-main">
            <nav className="guide-breadcrumb" aria-label={t.navigation}>
              <a href={base}>{t.guide}</a>
              <span aria-hidden="true">/</span>
              {current ? (
                <a href={categoryUrl(current.category)}>
                  {names[current.category]}
                </a>
              ) : (
                <span>{names[category!]}</span>
              )}
            </nav>
            {current ? (
              <article aria-labelledby="guide-article-title">
                <header className="guide-article-heading">
                  <h1 id="guide-article-title">{current.title}</h1>
                  <p>{current.introduction}</p>
                </header>
                <div
                  className={`guide-article-body ${current.image ? 'has-image' : ''}`}
                >
                  <ol>
                    {current.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                  {current.image && (
                    <Screenshot
                      key={current.id}
                      article={current}
                      locale={locale}
                      copy={t}
                      navigation={n}
                    />
                  )}
                </div>
                {current.access && (
                  <p className="guide-access">{current.access}</p>
                )}
                <nav className="guide-article-paging" aria-label={t.guide}>
                  {position > 0 ? (
                    <a href={articleUrl(siblings[position - 1].id)}>
                      <small>
                        <ArrowLeft size={15} aria-hidden="true" />
                        {n.previous}
                      </small>
                      {siblings[position - 1].title}
                    </a>
                  ) : (
                    <span />
                  )}
                  {position < siblings.length - 1 && (
                    <a href={articleUrl(siblings[position + 1].id)}>
                      <small>
                        {n.next}
                        <ArrowRight size={15} aria-hidden="true" />
                      </small>
                      {siblings[position + 1].title}
                    </a>
                  )}
                </nav>
              </article>
            ) : (
              <section>
                <h1>{names[category!]}</h1>
                {articleList(siblings)}
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
