import type { Metadata } from 'next';
import { LocalizedLegalPage } from '@/components/localized-legal-page';

export const metadata: Metadata = {
  title: "Поддержка | Partitoria",
  description: "Помощь по приложению Partitoria, библиотеке и подпискам.",
};

export const dynamic = 'force-static';

export default function SupportPage() {
  return <LocalizedLegalPage locale="ru" section="support" />;
}
