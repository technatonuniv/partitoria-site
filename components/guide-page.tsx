'use client';

import { useDeferredValue, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';
import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { accessLabels, articleSteps, categoryNames, categoryOrder, guideArticles, type GuideArticle, type GuideCategory } from '@/lib/guide-content';
import { siteCopy, type Locale } from '@/lib/site-content';

function GuideImage({ file, category, locale }: { file: string; category: GuideCategory; locale: Locale }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  const t = siteCopy[locale];
  return <figure className="guide-screenshot">
    {/* Genuine app capture supplied from the portrait emulator. Never replace this with generated UI. */}
    <a href={`/guide/${file}`} target="_blank" rel="noreferrer" aria-label={`${t.screenshot}: ${categoryNames[locale][category]}`}>
      <Image src={`/guide/${file}`} alt={`${t.screenshot}: ${categoryNames[locale][category]}`} width={1200} height={1920} sizes="(max-width: 760px) 290px, 285px" unoptimized onError={() => setFailed(true)} />
    </a>
    <figcaption>{t.imageNote}</figcaption>
  </figure>;
}

function articleSearchText(article: GuideArticle, locale: Locale) {
  return [...article.text[locale], ...articleSteps(article, locale), categoryNames[locale][article.category]].join(' ').toLocaleLowerCase(locale);
}

export function GuidePage({ locale }: { locale: Locale }) {
  const t = siteCopy[locale];
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const [category, setCategory] = useState<GuideCategory | 'all'>('all');
  const [selectedId, setSelectedId] = useState(guideArticles[0].id);

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!guideArticles.some((article) => article.id === id)) return;
    const frame = window.requestAnimationFrame(() => setSelectedId(id));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const normalized = deferredQuery.trim().toLocaleLowerCase(locale);
  const filtered = guideArticles.filter((article) =>
    (category === 'all' || article.category === category) &&
    (!normalized || articleSearchText(article, locale).includes(normalized)),
  );
  const current = filtered.find((article) => article.id === selectedId) ?? filtered[0];

  function chooseArticle(id: string) {
    setSelectedId(id);
    window.history.replaceState(null, '', `#${id}`);
    if (window.matchMedia('(max-width: 760px)').matches) {
      window.requestAnimationFrame(() => document.getElementById('guide-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }

  return <main lang={locale}>
    <DocumentLanguage locale={locale} />
    <SiteHeader locale={locale} section="/guide" />
    <section className="guide-hero" id="content"><div className="guide-hero-inner"><h1>{t.guideTitle}</h1><p>{t.guideLead}</p></div></section>
    <div className="guide-shell">
      <aside className="guide-side" aria-label={t.guide}>
        <label className="search-label" htmlFor="guide-search-input">{t.search}</label>
        <div className="guide-search"><Search aria-hidden="true" size={20} /><input id="guide-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} /></div>
        <fieldset className="category-list"><legend className="visually-hidden">{t.all}</legend>
          <button type="button" className={category === 'all' ? 'active' : ''} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>{t.all}</button>
          {categoryOrder.map((key) => <button type="button" key={key} className={category === key ? 'active' : ''} aria-pressed={category === key} onClick={() => setCategory(key)}>{categoryNames[locale][key]}</button>)}
        </fieldset>
        <output className="guide-count">{t.results}: {filtered.length}</output>
      </aside>
      <div className="guide-results">
        <div className="article-list" aria-label={t.results}>
          {filtered.length ? filtered.map((article) => <button type="button" key={article.id} className={`article-choice ${current?.id === article.id ? 'selected' : ''}`} aria-current={current?.id === article.id ? 'true' : undefined} onClick={() => chooseArticle(article.id)}>
            <span>{categoryNames[locale][article.category]}</span>
            <strong>{article.text[locale][0]}</strong>
            <small>{article.text[locale][1]}</small>
          </button>) : <p className="guide-empty">{t.empty}</p>}
        </div>
        {current ? <article className="guide-detail" id="guide-detail" aria-labelledby="guide-article-title">
          <div className="article-heading"><p>{categoryNames[locale][current.category]}</p><h2 id="guide-article-title">{current.text[locale][0]}</h2><p>{current.text[locale][1]}</p></div>
          <div className={`article-content ${current.image ? 'with-image' : ''}`}>
            <ol>{articleSteps(current, locale).map((step, index) => <li key={index}>{step}</li>)}</ol>
            {current.image ? <GuideImage key={current.id} file={current.image} category={current.category} locale={locale} /> : null}
          </div>
          {current.access ? <p className="guide-access"><strong>{t.access}:</strong> {accessLabels[locale][current.access]}</p> : null}
        </article> : null}
      </div>
    </div>
    <section className="guide-help"><h2>{t.contact}</h2><a href="mailto:support@partitoria.app">support@partitoria.app <span aria-hidden="true">↗</span></a></section>
    <SiteFooter locale={locale} />
  </main>;
}
