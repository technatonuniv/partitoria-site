import { GuidePage } from '@/components/guide-page';
import { guideMetadata } from '@/lib/guide-metadata';
export const dynamic = 'force-static';
export const metadata = guideMetadata('ru');
export default function Guide() { return <GuidePage locale="ru" />; }
