import type { Metadata } from 'next';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import styles from '../privacy-policy/page.module.css';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  robots: { index: false, follow: true },
};

export default function AccessibilityStatementPage() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Accessibility Statement</h1>
        <div className={styles.prose}>
          <p className={styles.notice}>
            <strong>Draft.</strong> Original placeholder copy. Confirm each claim below
            against a real audit before publishing — an inaccurate accessibility
            statement is worse than none.
          </p>

          <h2>Our aim</h2>
          <p>
            We want this site to be usable by everyone, regardless of ability or the
            technology they browse with. We target WCAG 2.2 Level AA.
          </p>

          <h2>What we have done</h2>
          <p>
            The site uses semantic HTML with a single H1 per page and a logical heading
            order. Every interactive element is reachable and operable by keyboard, with a
            visible focus indicator. A skip link lets keyboard users bypass the header.
            Images carry descriptive alternative text, form fields have real associated
            labels, and errors are announced to screen readers. Animation is disabled for
            visitors who ask their system to reduce motion.
          </p>

          <h2>Known limitations</h2>
          <p>
            Colour contrast has not yet been independently verified across every
            background panel. We have not yet completed testing with screen readers on
            mobile.
          </p>

          <h2>Tell us about a problem</h2>
          <p>
            If something on this site blocks you, email{' '}
            <a href={`mailto:${site.email}`}>{site.email}</a> and we will fix it.
          </p>
        </div>
      </Container>
    </section>
  );
}
