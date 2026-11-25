import { categoryNames, guideArticles, type GuideArticle, type GuideCategory } from './guide-content';
import { guideImage } from './guide-image';
import { guideNavigationCopy } from './guide-navigation';
import { pageMetadata } from './page-metadata';
import { siteCopy, type Locale } from './site-content';

export function guideMetadata(locale: Locale) {
  return pageMetadata({
    locale, path: '/guide', title: siteCopy[locale].guideTitle, description: guideNavigationCopy[locale].lead,
  });
}

export function categoryMetadata(locale: Locale, category: GuideCategory) {
  const name = categoryNames[locale][category];
  const topics = guideArticles.filter((a) => a.category === category).slice(0, 3).map((a) => a.text[locale][0]);
  return pageMetadata({
    locale, path: `/guide/section/${category}`, title: `${name} | ${siteCopy[locale].guideTitle}`,
    description: `${name} — ${topics.join(' · ')}`,
  });
}

export function articleMetadata(locale: Locale, article: GuideArticle) {
  const [title, description] = article.text[locale];
  return pageMetadata({
    locale, path: `/guide/${article.id}`, title: `${title} | ${siteCopy[locale].guideTitle}`, description,
    image: article.image ? guideImage(locale, article.image).src : undefined,
  });
}
