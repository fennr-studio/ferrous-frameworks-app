import { aboutSnippetImage } from '@/data/about';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './AboutSnippet.module.css';

export function AboutSnippet() {
  return (
    <section className={styles.section} aria-labelledby="about-snippet-heading">
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <hr className={styles.tick} />
            <Reveal>
              <Eyebrow>03 / About Snippet</Eyebrow>
            </Reveal>

            {/* Decorative 3x3 plus grid from the reference. */}
            <Reveal variant="scale" delay={STAGGER}>
              <svg viewBox="0 0 100 100" className={styles.plusGrid} aria-hidden="true">
                <g stroke="currentColor" strokeWidth="5">
                  {[15, 50, 85].map((y) =>
                    [15, 50, 85].map((x) => (
                      <g key={`${x}-${y}`}>
                        <line x1={x - 10} y1={y} x2={x + 10} y2={y} />
                        <line x1={x} y1={y - 10} x2={x} y2={y + 10} />
                      </g>
                    )),
                  )}
                </g>
              </svg>
            </Reveal>

            <RevealText
              as="h2"
              id="about-snippet-heading"
              className={styles.title}
              delay={STAGGER}
            >
              Forged in Experience
            </RevealText>
            <Reveal as="p" className={styles.copy} delay={STAGGER * 2}>
              With decades of combined experience, Ferrous Frameworks is your trusted
              partner in construction. High-end precision is applied to every scale of
              commercial and industrial infrastructure.
            </Reveal>
            <Reveal delay={STAGGER * 3}>
              <Button href="/about">Learn our story</Button>
            </Reveal>
          </div>

          <div className={styles.imageWrap}>
            <RevealImage
              src={aboutSnippetImage.src}
              alt={aboutSnippetImage.alt}
              fill
              tone="grayscale"
              sizes="(min-width: 60rem) 50vw, 100vw"
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
