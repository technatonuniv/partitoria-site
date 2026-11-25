import { FactsPage, factsMetadata } from '@/components/discovery-page';

// A visit without JavaScript has the same content and canonical as the English edition.
export const metadata = factsMetadata('en');
export default function Page() {
  return <FactsPage locale="en" />;
}
