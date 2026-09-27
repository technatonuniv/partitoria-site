import { notFound } from 'next/navigation';
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
    ? {
        title: `${a.text.ru[0]} — Partitoria`,
        description: a.text.ru[1],
        alternates: { canonical: `/guide/${a.id}` },
      }
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
