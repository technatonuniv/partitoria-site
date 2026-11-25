import { notFound } from 'next/navigation';
import { categoryMetadata } from '@/lib/guide-metadata';
import { GuidePage } from '@/components/guide-page';
import {
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
    ? categoryMetadata('ru', category as GuideCategory)
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
