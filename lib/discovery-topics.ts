import type { Locale } from './site-content';
import routes from './discovery-topics-routes.json';
import en from './discovery-topics-en';
import ru from './discovery-topics-ru';
import de from './discovery-topics-de';
import fr from './discovery-topics-fr';

export type TopicSlug = keyof typeof routes;
export const topicSlugs = Object.keys(routes) as TopicSlug[];

export type TopicContent = {
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
  faq: { question: string; answer: string }[];
  guideSlugs: string[];
  screenshot: { article: string; alt: string; example?: 'musicxml-preview' };
  sources?: { label: string; href: string }[];
};

const editions: Partial<Record<Locale, Partial<Record<TopicSlug, TopicContent>>>> = {
  en, ru, de, fr,
};

export function getTopic(locale: Locale, slug: string): TopicContent | undefined {
  if (!Object.hasOwn(routes, slug)) return undefined;
  return editions[locale]?.[slug as TopicSlug];
}

export function topicLocales(slug: string): Locale[] {
  if (!Object.hasOwn(routes, slug)) return [];
  return Object.keys(routes[slug as TopicSlug]) as Locale[];
}
