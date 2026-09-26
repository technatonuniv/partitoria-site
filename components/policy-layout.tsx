import type { ReactNode } from 'react';
import { SiteFooter, SiteHeader } from './site-chrome';

type PolicyLayoutProps = {
  eyebrow: string;
  title: string;
  summary: string;
  section: string;
  effectiveDate?: string;
  children: ReactNode;
};

export function PolicyLayout({
  eyebrow,
  title,
  summary,
  section,
  effectiveDate = '5 сентября 2026 года',
  children,
}: PolicyLayoutProps) {
  return (
    <main>
      <SiteHeader section={section} />
      <article className="policy" id="content">
        <header className="policy-heading">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{summary}</p>
          <div className="policy-meta">
            <span>Действует с {effectiveDate}</span>
            <a href="#english" lang="en">Read in English</a>
          </div>
        </header>
        <div className="policy-body">{children}</div>
      </article>
      <SiteFooter />
    </main>
  );
}
