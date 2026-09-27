import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/guide-page';
import { guideArticles } from '@/lib/guide-content';
import { locales, localePath, type Locale } from '@/lib/site-content';
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
    ? {
        title: `${a.text[locale as Locale][0]} — Partitoria`,
        description: a.text[locale as Locale][1],
        alternates: {
          canonical: localePath(locale as Locale, `/guide/${a.id}`),
        },
      }
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
