import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A portfolio of precision: landmark commercial, industrial and civil frameworks delivered by Ferrous Frameworks.',
};

export default function ProjectsPage() {
  return (
    <section className={styles.section}>
      <Container>
        <RevealText as="h1" className={styles.title}>
          A Portfolio of Precision
        </RevealText>

        <ul className={styles.grid}>
          {projects.map((project, index) => (
            /* Stagger runs down the column pairs, so on a two-up grid the
               left card leads its neighbour rather than the whole row
               arriving as one block. */
            <Reveal as="li" key={project.slug} delay={index * STAGGER}>
              <Link href={`/projects/${project.slug}`} className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.number}>{project.number}</span>
                  <span className={styles.category}>{project.category}</span>
                </div>
                <hr className={styles.rule} />
                <div className={styles.imageWrap}>
                  <RevealImage
                    src={project.image}
                    alt={project.alt}
                    fill
                    delay={index * STAGGER}
                    // Only the first two are likely above the fold; the rest
                    // lazy-load by default, which is next/image's behaviour.
                    priority={index < 2}
                    sizes="(min-width: 48rem) 50vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <h2 className={styles.cardTitle}>{project.title}</h2>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
