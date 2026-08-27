import Link from 'next/link';
import { featuredProjects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Rule } from '@/components/ui/Rule';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './FeaturedProjects.module.css';

export function FeaturedProjects() {
  return (
    <section className={styles.section}>
      <Container>
        <Rule />
        <div className={styles.head}>
          <SectionHeading
            eyebrow="02 / Featured Projects"
            title="Built to Last"
            intro="A portfolio of strength and scale, showcasing landmark frameworks across the industrial spectrum."
            introRule
          />
        </div>

        <ul className={styles.grid}>
          {featuredProjects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={index * STAGGER}>
              <Link href={`/projects/${project.slug}`} className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.number}>{project.number}</span>
                  <span className={styles.category}>{project.categoryShort}</span>
                </div>
                <hr className={styles.rule} />
                <div className={styles.imageWrap}>
                  <RevealImage
                    src={project.image}
                    alt={project.alt}
                    fill
                    delay={index * STAGGER}
                    sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.title}>{project.title}</h3>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.more}>
          <Button href="/projects">More projects</Button>
        </Reveal>
      </Container>
    </section>
  );
}
