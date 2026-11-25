import { TopicPage, discoveryLocale, topicMetadata } from '@/components/discovery-page';
import { topicLocales, topicSlugs } from '@/lib/discovery-topics';

type Props = { params: Promise<{ locale: string; slug: string }> };
export const dynamic = 'force-static';
export const generateStaticParams = () => topicSlugs.flatMap(slug =>
  topicLocales(slug).filter(locale => locale !== 'ru').map(locale => ({ locale, slug })));
export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  return topicMetadata(discoveryLocale(locale), slug);
}
export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  return <TopicPage locale={discoveryLocale(locale)} slug={slug} />;
}
