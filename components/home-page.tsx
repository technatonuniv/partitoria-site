import Link from 'next/link';
import { SiteFooter, SiteHeader } from './site-chrome';
import { DocumentLanguage } from './document-language';
import { localePath, siteCopy, type Locale } from '@/lib/site-content';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteCopy[locale];
  return <main lang={locale}>
    <DocumentLanguage locale={locale} />
    <SiteHeader locale={locale} />
    <section className="hero" id="content">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>{t.homeTitle}</h1>
          <p>{t.homeLead}</p>
          <Link className="hero-action" href={localePath(locale, '/guide')}>{t.homeAction}<span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
    <section className="home-intro" id="about" aria-labelledby="home-about-title">
      <div className="section-heading"><h2 id="home-about-title">{t.valueTitle}</h2></div>
      <div className="value-list">
        {[t.valueOne, t.valueTwo, t.valueThree].map((value, index) => <div className="value-item" key={value}><span aria-hidden="true">0{index + 1}</span><p>{value}</p></div>)}
      </div>
    </section>
    <section className="guide-invite" aria-labelledby="invite-title">
      <div><h2 id="invite-title">{t.guideTitle}</h2><p>{t.guideLead}</p></div>
      <Link className="text-action" href={localePath(locale, '/guide')}>{t.homeAction}<span aria-hidden="true">↗</span></Link>
    </section>
    <section className="release-note" aria-labelledby="status-title">
      <div className="rule-symbol" aria-hidden="true">I</div>
      <div><h2 id="status-title">{t.statusTitle}</h2><p>{t.statusText}</p></div>
    </section>
    <SiteFooter locale={locale} />
  </main>;
}
