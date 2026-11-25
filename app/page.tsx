import { HomePage } from '@/components/home-page';
import { homeMetadata } from '@/lib/home-metadata';
export const dynamic = 'force-static';
export const metadata = homeMetadata('ru');
export default function Home() { return <HomePage locale="ru" />; }
