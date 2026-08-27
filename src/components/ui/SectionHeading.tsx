import { Eyebrow } from './Eyebrow';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import styles from './SectionHeading.module.css';

type Props = {
  eyebrow: string;
  title: string;
  /** Optional supporting copy. Placed beside the title on wide screens. */
  intro?: string;
  /** Renders the intro with a left rule, as on Featured Projects. */
  introRule?: boolean;
};

/**
 * Two measured layouts, selected by `introRule`:
 *
 *   introRule  — title and intro side by side, intro in a right-hand column
 *                behind a vertical rule (Featured Projects, Testimonials).
 *   otherwise  — intro stacked UNDER the title at a larger size (Services).
 *
 * They are not stylistic variants of one layout: the reference sets different
 * eyebrow-to-title spacing and a different intro size for each.
 *
 * The eyebrow leads, the title rises word by word, the intro follows. Each
 * part observes its own position, so a heading split across a wide row still
 * animates in reading order rather than all at once.
 */
export function SectionHeading({ eyebrow, title, intro, introRule = false }: Props) {
  return (
    <div className={`${styles.wrapper} ${introRule ? styles.split : styles.stacked}`}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <div className={styles.row}>
        <RevealText as="h2" className={styles.title} delay={STAGGER}>
          {title}
        </RevealText>
        {intro ? (
          /* Rendered AS the <p>, not around it, so it stays the direct grid
             item of .row and the two-column layout is untouched. */
          <Reveal
            as="p"
            delay={STAGGER * 2}
            className={`${styles.intro} ${introRule ? styles.ruled : ''}`}
          >
            {intro}
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
