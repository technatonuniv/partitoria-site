import { legalMetadata } from '@/lib/legal-metadata';
import { LocalizedLegalPage } from '@/components/localized-legal-page';
export const metadata = legalMetadata('ru', 'privacy');
export const dynamic = 'force-static';
export default function PrivacyPage() { return <LocalizedLegalPage locale="ru" section="privacy" />; }
