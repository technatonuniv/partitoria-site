import { TopicPage, topicMetadata } from '@/components/discovery-page';
import { topicSlugs } from '@/lib/discovery-topics';

type Props = { params: Promise<{ slug: string }> };
export const dynamic = 'force-static';
export const generateStaticParams = () => topicSlugs.map(slug => ({ slug }));
export async function generateMetadata({ params }: Props) {
  return topicMetadata('ru', (await params).slug);
}
export default async function Page({ params }: Props) {
  return <TopicPage locale="ru" slug={(await params).slug} />;
}
