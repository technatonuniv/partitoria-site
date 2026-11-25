import { notFound } from 'next/navigation';
import { articleMetadata } from '@/lib/guide-metadata';
import { GuidePage } from '@/components/guide-page';
import { guideArticles } from '@/lib/guide-content';
import { locales, type Locale } from '@/lib/site-content';
export const dynamic = 'force-static';
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    guideArticles.map((a) => ({ locale, article: a.id })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; article: string }>;
}) {
  const { locale, article } = await params;
  const a = guideArticles.find((a) => a.id === article);
  return a && locales.includes(locale as Locale)
    ? articleMetadata(locale as Locale, a)
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ locale: string; article: string }>;
}) {
  const { locale, article } = await params;
  if (
    !locales.includes(locale as Locale) ||
    !guideArticles.some((a) => a.id === article)
  )
    notFound();
  return <GuidePage locale={locale as Locale} articleId={article} />;
}
