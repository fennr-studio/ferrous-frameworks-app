import { ctaImage } from '@/data/about';
import { Button } from '@/components/ui/Button';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './CtaBand.module.css';

const MARQUEE_TEXT = 'Building dreams. Delivering quality';

export function CtaBand() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        {/* Marquee duplicated once and translated by -50%, which is what makes
            the loop seamless. aria-hidden on the copy so it isn't read twice. */}
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[0, 1].map((i) => (
              <span key={i} aria-hidden={i === 1}>
                {Array.from({ length: 4 }, (_, j) => (
                  <span key={j}>{MARQUEE_TEXT}&nbsp;&nbsp;//&nbsp;&nbsp;</span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <Reveal as="p" className={styles.copy}>
            We offer comprehensive construction services, bringing your vision to life
            with precision and enduring quality.
          </Reveal>
          <Reveal delay={STAGGER}>
            <Button href="/contact" variant="bare">
              Get a quote
            </Button>
          </Reveal>
        </div>
      </div>

      <div className={styles.imageWrap}>
        <RevealImage
          src={ctaImage.src}
          alt={ctaImage.alt}
          fill
          tone="grayscale"
          sizes="(min-width: 60rem) 58vw, 100vw"
          className={styles.image}
        />
      </div>
    </section>
  );
}
