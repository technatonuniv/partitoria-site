import { FactsPage, discoveryLocale, factsMetadata } from '@/components/discovery-page';
import { locales } from '@/lib/site-content';

type Props = { params: Promise<{ locale: string }> };
export const dynamic = 'force-static';
export const generateStaticParams = () => locales.filter(locale => locale !== 'ru').map(locale => ({ locale }));
export async function generateMetadata({ params }: Props) {
  return factsMetadata(discoveryLocale((await params).locale));
}
export default async function Page({ params }: Props) {
  return <FactsPage locale={discoveryLocale((await params).locale)} />;
}
