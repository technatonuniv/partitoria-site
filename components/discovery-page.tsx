import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { factsCopy, factsSupportEmail, factsVideoUrl } from '@/lib/discovery-facts';
import { getTopic, topicLocales, topicSlugs, type TopicContent } from '@/lib/discovery-topics';
import { googlePlayUrl } from '@/lib/features-content';
import { guideArticles } from '@/lib/guide-content';
import { guideImage } from '@/lib/guide-image';
import historicalImageCopy from '@/lib/guide-image-history.json';
import { pageMetadata } from '@/lib/page-metadata';
import { locales, localePath, siteCopy, type Locale } from '@/lib/site-content';
import { DocumentLanguage } from './document-language';
import { SiteFooter, SiteHeader } from './site-chrome';
import { ApplicationStructuredData } from './structured-data';

const questionsLabel = {
  en: 'Questions from musicians', ru: 'Вопросы музыкантов', de: 'Fragen aus der Musikpraxis', fr: 'Questions de musiciens',
  it: 'Domande dei musicisti', es: 'Preguntas de músicos', pt: 'Perguntas de músicos', uk: 'Запитання музикантів', pl: 'Pytania muzyków',
};

export function discoveryLocale(value: string): Locale {
  if (!locales.includes(value as Locale)) notFound();
  return value as Locale;
}

function taggedPlayUrl(slug: string, locale: Locale) {
  const link = new URL(googlePlayUrl);
  link.searchParams.set('referrer', new URLSearchParams({
    utm_source: 'partitoria_site', utm_medium: 'website', utm_campaign: `${slug}_${locale}`,
  }).toString());
  return link.href;
}

function Screenshot({ locale, screenshot }: { locale: Locale; screenshot: TopicContent['screenshot'] }) {
  const article = guideArticles.find(entry => entry.id === screenshot.article);
  const image = article?.image ? guideImage(locale, article.image) : undefined;
  const source = screenshot.src || image?.src;
  if (!source) throw new Error(`Missing discovery screenshot for ${locale}/${screenshot.article}`);
  const landscape = Boolean(screenshot.src);
  return (
    <figure className={landscape ? 'discovery-figure landscape' : 'discovery-figure'}>
      <Image src={source} alt={screenshot.alt} width={landscape ? 960 : 1200}
        height={landscape ? 600 : 1920} unoptimized />
      <figcaption>{screenshot.alt}{!landscape && image?.versionCode === 10814 && ` ${historicalImageCopy[locale]}`}</figcaption>
    </figure>
  );
}

function Layout({ locale, slug, title, intro, children }: {
  locale: Locale; slug?: string; title: string; intro: string; children: ReactNode;
}) {
  const section = slug ? `/answers/${slug}` : '/facts';
  const playUrl = taggedPlayUrl(slug || 'facts', locale);
  return (
    <main lang={locale}>
      <DocumentLanguage locale={locale} />
      <SiteHeader locale={locale} section={section} playUrl={playUrl} availableLocales={slug ? topicLocales(slug) : locales} />
      <article className="discovery" id="content">
        <header className="discovery-heading">
          <h1>{title}</h1>
          <p>{intro}</p>
          <a className="discovery-install" href={playUrl}>{factsCopy[locale].install} <span aria-hidden="true">↗</span></a>
        </header>
        {children}
        <footer className="discovery-review">{factsCopy[locale].checked}</footer>
      </article>
      <SiteFooter locale={locale} playUrl={playUrl} />
    </main>
  );
}

export function factsMetadata(locale: Locale) {
  const { title, intro } = factsCopy[locale];
  return pageMetadata({ locale, path: '/facts', title, description: intro });
}

export function FactsPage({ locale }: { locale: Locale }) {
  const copy = factsCopy[locale];
  const topics = topicSlugs.flatMap(slug => {
    const topic = getTopic(locale, slug);
    return topic ? [{ title: topic.title, url: localePath(locale, `/answers/${slug}`) }] : [];
  });
  return (
    <Layout locale={locale} title={copy.title} intro={copy.intro}>
      <ApplicationStructuredData locale={locale} />
      <div className="discovery-columns">
        <div className="discovery-prose">
          {copy.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
        </div>
        <Screenshot locale={locale} screenshot={{ article: 'find-in-library', alt: guideArticles.find(entry => entry.id === 'find-in-library')!.text[locale][0] }} />
      </div>
      {topics.length > 0 && <section className="discovery-links">
        <h2>{questionsLabel[locale]}</h2>
        <ul>{topics.map(topic => <li key={topic.url}><a href={topic.url}>{topic.title}</a></li>)}</ul>
      </section>}
      <section className="discovery-links">
        <h2>{siteCopy[locale].support}</h2>
        <ul>
          <li><a href={localePath(locale, '/guide')}>{copy.guide}</a></li>
          <li><a href={factsVideoUrl}>{copy.videos}</a></li>
          <li>{copy.support} <a href={`mailto:${factsSupportEmail}`}>{factsSupportEmail}</a></li>
        </ul>
      </section>
    </Layout>
  );
}

export function topicMetadata(locale: Locale, slug: string) {
  const topic = getTopic(locale, slug);
  if (!topic) notFound();
  return pageMetadata({
    locale, path: `/answers/${slug}`, title: `${topic.title} | Partitoria`, description: topic.description,
    availableLocales: topicLocales(slug),
  });
}

export function TopicPage({ locale, slug }: { locale: Locale; slug: string }) {
  const topic = getTopic(locale, slug);
  if (!topic) notFound();
  return (
    <Layout locale={locale} slug={slug} title={topic.title} intro={topic.description}>
      <div className="discovery-columns">
        <div className="discovery-prose">
          {topic.sections.map(section => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </section>)}
        </div>
        <Screenshot locale={locale} screenshot={topic.screenshot} />
      </div>
      <section className="discovery-faq">
        <h2>{questionsLabel[locale]}</h2>
        <dl>{topic.faq.map(item => <div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd></div>)}</dl>
      </section>
      <section className="discovery-links">
        <h2>{siteCopy[locale].guide}</h2>
        <ul>
          {topic.guideSlugs.map(id => {
            const article = guideArticles.find(entry => entry.id === id);
            if (!article) throw new Error(`Unknown guide article ${id}`);
            return <li key={id}><a href={localePath(locale, `/guide/${id}`)}>{article.text[locale][0]}</a></li>;
          })}
          {topic.sources?.map(source => <li key={source.href}><a href={source.href}>{source.label}</a></li>)}
        </ul>
      </section>
    </Layout>
  );
}
