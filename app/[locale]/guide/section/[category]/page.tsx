import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/guide-page';
import {
  categoryNames,
  categoryOrder,
  type GuideCategory,
} from '@/lib/guide-content';
import { locales, type Locale } from '@/lib/site-content';
export const dynamic = 'force-static';
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    categoryOrder.map((category) => ({ locale, category })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  return locales.includes(locale as Locale) &&
    categoryOrder.includes(category as GuideCategory)
    ? {
        title: `${categoryNames[locale as Locale][category as GuideCategory]} — Partitoria`,
      }
    : {};
}
export default async function Category({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  if (
    !locales.includes(locale as Locale) ||
    !categoryOrder.includes(category as GuideCategory)
  )
    notFound();
  return (
    <GuidePage locale={locale as Locale} category={category as GuideCategory} />
  );
}
