import type { Metadata } from 'next';
import { sans, mono } from '@/lib/fonts';
import { site } from '@/data/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipLink } from '@/components/layout/SkipLink';
import { PageTransition } from '@/components/motion/PageTransition';
import './globals.css';

/**
 * Root layout — the only component rendering <html>/<body>. It wraps every
 * route and persists across client-side navigations without re-rendering,
 * which is exactly why Header and Footer live here.
 *
 * Server Component: no "use client", so it ships zero JavaScript.
 */

export const metadata: Metadata = {
  // metadataBase resolves relative OG/canonical URLs to absolute ones.
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — Building the Foundations of Tomorrow`,
    // Child pages set only their own title; this appends the brand.
    template: `%s | ${site.name}`,
  },
  description:
    'Ferrous Frameworks delivers landmark commercial, industrial and civil construction projects with structural precision and industrial scale.',
  openGraph: {
    type: 'website',
    siteName: site.legalName,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      // Next 16 no longer overrides a global scroll-behavior during route
      // transitions unless this attribute is present.
      data-scroll-behavior="smooth"
      // The inline script below adds `js` to this element's class list before
      // React hydrates, which is a deliberate server/client difference. Scoped
      // to this element only — it does not suppress warnings for the tree.
      suppressHydrationWarning
    >
      <body>
        {/*
          Marks the document as scripted before the rest of the body paints.
          Every reveal keeps its hidden state behind `html.js`, so without this
          the animations would either flash their final position first or, with
          JavaScript disabled, hide the page permanently.

          Gated on IntersectionObserver too: nothing may be hidden in a browser
          that has no way to observe it back into view.

          Inlined here rather than in a manual <head>, which the App Router
          docs steer away from in root layouts.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if('IntersectionObserver' in window)document.documentElement.classList.add('js')",
          }}
        />
        <SkipLink />
        <Header />
        {/* tabIndex={-1} makes this a valid target for the skip link. */}
        <main id="main" tabIndex={-1}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
