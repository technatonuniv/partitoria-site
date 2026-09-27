import { notFound } from 'next/navigation';
import { GuidePage } from '@/components/guide-page';
import {
  categoryNames,
  categoryOrder,
  type GuideCategory,
} from '@/lib/guide-content';
export const dynamic = 'force-static';
export function generateStaticParams() {
  return categoryOrder.map((category) => ({ category }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return categoryOrder.includes(category as GuideCategory)
    ? { title: `${categoryNames.ru[category as GuideCategory]} — Partitoria` }
    : {};
}
export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!categoryOrder.includes(category as GuideCategory)) notFound();
  return <GuidePage locale="ru" category={category as GuideCategory} />;
}
