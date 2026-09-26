import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { legalContent, type LegalPage } from '@/lib/legal-content';
import { siteCopy, type Locale } from '@/lib/site-content';

const sources = [
  ['IMSLP / Petrucci Music Library', 'https://imslp.org/'],
  ['Wikimedia Commons', 'https://commons.wikimedia.org/'],
  ['Internet Archive', 'https://archive.org/'],
  ['Gallica / Bibliothèque nationale de France', 'https://gallica.bnf.fr/'],
  ['Library of Congress', 'https://www.loc.gov/'],
  ['Mutopia Project', 'https://www.mutopiaproject.org/'],
] as const;

function withPolicyLinks(paragraph: string) {
  return paragraph.split(/(support@partitoria\.app|Resend)/g).map((part, index) => {
    if (part === 'support@partitoria.app') return <a key={index} href="mailto:support@partitoria.app">{part}</a>;
    if (part === 'Resend') return <a key={index} href="https://resend.com/security/gdpr" rel="noreferrer">{part}</a>;
    return <span key={index}>{part}</span>;
  });
}

export function LocalizedLegalPage({ locale, section }: { locale: Locale; section: LegalPage }) {
  const t = siteCopy[locale];
  const [summary, ...paragraphs] = legalContent[locale][section];
  return <main lang={locale}>
    <DocumentLanguage locale={locale} />
    <SiteHeader locale={locale} section={`/${section}`} />
    <article className="policy" id="content">
      <header className="policy-heading">
        <h1>{t[section]}</h1>
        <p>{summary}</p>
        <div className="policy-meta"><time dateTime={section === 'support' || section === 'privacy' ? '2026-09-24' : '2026-09-05'}>{section === 'support' || section === 'privacy' ? '2026-09-24' : '2026-09-05'}</time></div>
      </header>
      <div className="policy-body">
        <section>{paragraphs.map((paragraph) => <p key={paragraph}>{withPolicyLinks(paragraph)}</p>)}</section>
        {section === 'sources' ? <section><h2>{t.sources}</h2><ul className="source-list">{sources.map(([name, url]) => <li key={url}><a href={url} rel="noreferrer">{name}</a></li>)}</ul></section> : null}
        {section === 'support' ? <a className="primary-link" href="mailto:support@partitoria.app?subject=Partitoria%20support">support@partitoria.app</a> : null}
      </div>
    </article>
    <SiteFooter locale={locale} />
  </main>;
}
