import { notFound } from 'next/navigation';
import { articleMetadata } from '@/lib/guide-metadata';
import { GuidePage } from '@/components/guide-page';
import { guideArticles } from '@/lib/guide-content';
export const dynamic = 'force-static';
export function generateStaticParams() {
  return guideArticles.map((a) => ({ article: a.id }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const a = guideArticles.find((a) => a.id === article);
  return a
    ? articleMetadata('ru', a)
    : {};
}
export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  if (!guideArticles.some((a) => a.id === article)) notFound();
  return <GuidePage locale="ru" articleId={article} />;
}
