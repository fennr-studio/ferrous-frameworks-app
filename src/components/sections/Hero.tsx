import { site } from '@/data/site';
import { heroImage } from '@/data/about';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <RevealText as="h1" className={styles.title}>
          Building the Foundations of Tomorrow
        </RevealText>
        <div className={styles.row}>
          <Reveal as="p" className={styles.lede} delay={STAGGER * 3}>
            We deliver landmark projects with unwavering strength and precision, forging
            legacies through technical mastery and commercial-scale expertise.
          </Reveal>
          <Reveal delay={STAGGER * 4}>
            <Button href="/projects" variant="outline">
              View our work
            </Button>
          </Reveal>
        </div>
      </Container>

      <div className={styles.media}>
        <div className={styles.imageWrap}>
          <RevealImage
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            /* priority ONLY here. This is the Largest Contentful Paint element,
               so it must not be lazy-loaded. Marking other images priority
               would compete for bandwidth and make LCP worse, not better. */
            priority
            quality={90}
            sizes="(min-width: 60rem) 65vw, 100vw"
            className={styles.image}
          />
        </div>
        <Reveal className={styles.panel} variant="fade" delay={STAGGER * 2}>
          <svg viewBox="0 0 100 100" className={styles.asterisk} aria-hidden="true">
            <g stroke="currentColor" strokeWidth="4" strokeLinecap="square">
              <line x1="50" y1="5" x2="50" y2="95" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="18" y1="18" x2="82" y2="82" />
              <line x1="82" y1="18" x2="18" y2="82" />
            </g>
          </svg>
          <div className={styles.caption}>
            <hr className={styles.captionRule} />
            <p>{site.heroCaption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
