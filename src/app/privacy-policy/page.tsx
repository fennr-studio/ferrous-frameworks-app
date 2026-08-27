import type { Metadata } from 'next';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  // Legal boilerplate has no SEO value and shouldn't compete with real pages.
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Privacy Policy</h1>
        <div className={styles.prose}>
          <p className={styles.notice}>
            <strong>Draft.</strong> This is original placeholder copy, not legal advice.
            The reference site used Wix&apos;s template text, which is Wix&apos;s
            intellectual property and has not been reproduced. Have a solicitor review
            this before launch.
          </p>

          <h2>What we collect</h2>
          <p>
            When you submit the contact form we collect the name, company, email address,
            phone number and project details you choose to provide. We do not collect
            this information any other way.
          </p>

          <h2>Why we collect it</h2>
          <p>
            Solely to respond to your enquiry and to discuss potential work. We do not
            sell it, share it with advertisers, or use it for marketing you have not
            asked for.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry correspondence is retained for as long as needed to handle your
            request and to meet our record-keeping obligations, then deleted.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This site sets no tracking or advertising cookies and runs no third-party
            analytics.
          </p>

          <h2>Your rights</h2>
          <p>
            You may ask us for a copy of the information we hold about you, ask us to
            correct it, or ask us to delete it. Write to{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}
