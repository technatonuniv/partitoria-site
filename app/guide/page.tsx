import { GuidePage } from '@/components/guide-page';
import type { Metadata } from 'next';
export const dynamic = 'force-static';
export const metadata: Metadata = { title: 'Руководство Partitoria', description: 'Поиск по подробному руководству Partitoria: библиотека, чтение, репетиция, резервные копии и настройки.' };
export default function Guide() { return <GuidePage locale="ru" />; }
