import type { Metadata } from 'next';
import { site } from '@/data/site';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/contact/ContactForm';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start your next project with Ferrous Frameworks. Get in touch for commercial, industrial and civil construction enquiries.',
};

export default function ContactPage() {
  return (
    <section className={styles.section}>
      <Container>
        <RevealText as="h1" className={styles.title}>
          Start Your Next Project
        </RevealText>
        <Reveal as="p" className={styles.lede} delay={STAGGER * 2}>
          Let&apos;s build something remarkable together. We transform industrial visions
          into structural reality with precision and integrity.
        </Reveal>

        <div className={styles.info}>
          {[
            {
              heading: 'Office location',
              body: (
                <address className={styles.address}>
                  {site.address.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              ),
            },
            {
              heading: 'Direct line',
              body: <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>,
            },
            {
              heading: 'Global inquiries',
              body: <a href={`mailto:${site.email}`}>{site.email}</a>,
            },
          ].map((block, index) => (
            <Reveal key={block.heading} delay={index * STAGGER}>
              <h2 className={styles.infoHeading}>{block.heading}</h2>
              {block.body}
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.formBlock}>
          <h2 className={styles.formHeading}>Get in touch</h2>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
