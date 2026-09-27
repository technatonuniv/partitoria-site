import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { GuideBrowser } from './guide-browser';
import {
  accessLabels,
  articleSteps,
  categoryNames,
  guideArticles,
  type GuideCategory,
} from '@/lib/guide-content';
import { guideNavigationCopy } from '@/lib/guide-navigation';
import { siteCopy, type Locale } from '@/lib/site-content';

export function GuidePage({
  locale,
  articleId,
  category,
}: {
  locale: Locale;
  articleId?: string;
  category?: GuideCategory;
}) {
  const t = siteCopy[locale];
  const section = articleId
    ? `/guide/${articleId}`
    : category
      ? `/guide/section/${category}`
      : '/guide';
  // Only the requested language crosses the server/client boundary.
  const articles = guideArticles.map((a) => ({
    id: a.id,
    category: a.category,
    title: a.text[locale][0],
    introduction: a.text[locale][1],
    steps: articleSteps(a, locale),
    image: a.image,
    access: a.access ? accessLabels[locale][a.access] : undefined,
  }));
  return (
    <main lang={locale}>
      <DocumentLanguage locale={locale} />
      <SiteHeader locale={locale} section={section} />
      <GuideBrowser
        key={`${locale}:${section}`}
        locale={locale}
        articles={articles}
        articleId={articleId}
        category={category}
        names={categoryNames[locale]}
        copy={t}
        navigation={guideNavigationCopy[locale]}
      />
      <section className="guide-help">
        <h2>{t.contact}</h2>
        <a href="mailto:support@partitoria.app">support@partitoria.app</a>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
