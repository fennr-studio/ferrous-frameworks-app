import { testimonials } from '@/data/testimonials';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { Reveal } from '@/components/motion/Reveal';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './Testimonials.module.css';

/**
 * No carousel. The reference stacks these as full-bleed alternating rows, and
 * a carousel would hide two-thirds of the content behind interaction for no
 * gain. Three items in source order, readable by everyone.
 *
 * The panel enters from whichever side it sits on, so the alternating layout
 * reads as one motion rather than three identical ones.
 */
export function Testimonials() {
  return (
    <section className={styles.section}>
      <Rule />
      <Container>
        <div className={styles.head}>
          <SectionHeading
            eyebrow="04 / Testimonials"
            title="Trusted by the Industry Leaders"
          />
        </div>
      </Container>

      <ul className={styles.list}>
        {testimonials.map((t) => (
          <li
            key={t.number}
            className={`${styles.row} ${t.side === 'right' ? styles.reversed : ''}`}
          >
            <Reveal
              as="figure"
              variant={t.side === 'right' ? 'right' : 'left'}
              className={`${styles.panel} ${styles[t.panel]}`}
            >
              <p className={styles.number}>{t.number}</p>
              <div className={styles.quoteBlock}>
                <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption>
                  <span className={styles.author}>{t.author}</span>
                  <span className={styles.role}>{t.role}</span>
                </figcaption>
              </div>
            </Reveal>
            <div className={styles.imageWrap}>
              <RevealImage
                src={t.image}
                alt={t.alt}
                fill
                tone="grayscale"
                sizes="(min-width: 60rem) 55vw, 100vw"
                className={styles.image}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
