import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { legalContent, type LegalPage } from '@/lib/legal-content';
import { siteCopy, type Locale } from '@/lib/site-content';
import { privacyDetails } from '@/lib/privacy-details';
import privacyDeletion from '@/lib/privacy-deletion.json';
import { commercialCopy } from '@/lib/commercial-content';
import { SubscriptionPrices } from './subscription-prices';

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

function CommercialTerms({ locale }: { locale: Locale }) {
  const t = commercialCopy[locale];
  return <section>
    <h2>{t.termsLabel}</h2>
    <p>{t.free}</p>
    <p>{t.pro}</p>
    <SubscriptionPrices locale={locale} />
    {[t.trial, t.manage, t.offline, t.availability].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    <p><a href="https://support.google.com/googleplay/answer/7018481" rel="noreferrer">Google Play — {t.termsLabel}</a></p>
  </section>;
}

function PrivacyDeletion({ locale }: { locale: Locale }) {
  const t = privacyDeletion[locale];
  return <section id="data-deletion" aria-labelledby="data-deletion-title">
    <h2 id="data-deletion-title">{t.title}</h2>
    <ol className="list-decimal pl-6">{t.steps.map((step) => <li key={step}>{withPolicyLinks(step)}</li>)}</ol>
    <p><a href="mailto:support@partitoria.app?subject=Partitoria%20data%20deletion">{t.emailAction}</a></p>
    {[t.deleted, t.retained, t.backups, t.local].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
  </section>;
}

export function LocalizedLegalPage({ locale, section }: { locale: Locale; section: LegalPage }) {
  const t = siteCopy[locale];
  const [summary, ...paragraphs] = legalContent[locale][section];
  const effectiveDate = section === 'privacy' ? '2026-10-09' : ['support', 'terms'].includes(section) ? '2026-10-01' : '2026-09-05';
  return <main lang={locale}>
    <DocumentLanguage locale={locale} />
    <SiteHeader locale={locale} section={`/${section}`} />
    <article className="policy" id="content">
      <header className="policy-heading">
        <h1>{t[section]}</h1>
        <p>{summary}</p>
        <div className="policy-meta"><time dateTime={effectiveDate}>{effectiveDate}</time></div>
        {section === 'privacy' ? <p><a href="#data-deletion">{privacyDeletion[locale].title}</a></p> : null}
      </header>
      <div className="policy-body">
        <section>{paragraphs.map((paragraph) => <p key={paragraph}>{withPolicyLinks(paragraph)}</p>)}</section>
        {section === 'terms' ? <CommercialTerms locale={locale} /> : null}
        {section === 'privacy' ? <PrivacyDeletion locale={locale} /> : null}
        {section === 'privacy' ? <details><summary>{privacyDetails[locale].title}</summary><p>{withPolicyLinks(privacyDetails[locale].text)}</p></details> : null}
        {section === 'privacy' ? <p><a href="https://policies.google.com/privacy" rel="noreferrer">Google — {t.privacy}</a></p> : null}
        {section === 'sources' ? <section><h2>{t.sources}</h2><ul className="source-list">{sources.map(([name, url]) => <li key={url}><a href={url} rel="noreferrer">{name}</a></li>)}</ul></section> : null}
        {section === 'support' ? <a className="primary-link" href="mailto:support@partitoria.app?subject=Partitoria%20support">support@partitoria.app</a> : null}
        {locale === 'ru' && (section === 'terms' || section === 'support') ? <section id="english" lang="en">
          <h2>{siteCopy.en[section]}</h2>
          {legalContent.en[section].map((paragraph) => <p key={paragraph}>{withPolicyLinks(paragraph)}</p>)}
          {section === 'terms' ? <CommercialTerms locale="en" /> : null}
        </section> : null}
      </div>
    </article>
    <SiteFooter locale={locale} />
  </main>;
}
