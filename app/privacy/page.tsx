import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-legal-page';
export const metadata: Metadata = { title: 'Конфиденциальность | Partitoria', description: 'Как Partitoria обращается с вашими данными.' };
export const dynamic = 'force-static';
export default function PrivacyPage() { return <LocalizedLegalPage locale="ru" section="privacy" />; }
