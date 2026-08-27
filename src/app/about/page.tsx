import type { Metadata } from 'next';
import { aboutHeroImage, team, values } from '@/data/about';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founded on iron-clad integrity and structural superiority, Ferrous Frameworks forges legacies built to last.',
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <RevealText as="h1" className={styles.title}>
            A Legacy of Strength
          </RevealText>
          <div className={styles.heroGrid}>
            <Reveal as="p" className={styles.lede} delay={STAGGER * 2}>
              Founded on the core principles of iron-clad integrity and structural
              superiority, Ferrous Frameworks began with a single vision: to redefine the
              industrial landscape of the modern era. Every beam we place and every
              foundation we pour is a testament to our unwavering commitment to high-end
              quality. We don&apos;t just build structures; we forge legacies that stand
              the test of time, ensuring that strength is never compromised for speed or
              convenience.
            </Reveal>
            <div className={styles.heroImage}>
              <RevealImage
                src={aboutHeroImage.src}
                alt={aboutHeroImage.alt}
                fill
                priority
                sizes="(min-width: 60rem) 45vw, 100vw"
                className={styles.image}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="values-heading">
        <Rule />
        <Container>
          <div className={styles.head}>
            <SectionHeading
              eyebrow=" Our Values "
              title="Our Guiding Principles"
              intro="Structural integrity is built on a foundation of unyielding ethical standards and operational precision."
            />
          </div>
          <ul className={styles.grid}>
            {values.map((value, index) => (
              <Reveal
                as="li"
                key={value.number}
                className={styles.item}
                delay={index * STAGGER}
              >
                <hr className={styles.itemRule} />
                <p className={styles.number}>[ {value.number} ]</p>
                <h3 className={styles.itemTitle}>{value.title}</h3>
                <p>{value.description}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="team-heading">
        <Rule />
        <Container>
          <div className={styles.head}>
            <SectionHeading
              eyebrow=" The Team "
              title="The Minds Behind the Build"
              intro="Structural integrity is mirrored in our leadership—a core collective of visionaries forging the future of industrial construction with precision and grit."
            />
          </div>
          <ul className={styles.grid}>
            {team.map((member, index) => (
              <Reveal
                as="li"
                key={member.name}
                className={styles.item}
                delay={index * STAGGER}
              >
                <div className={styles.portrait}>
                  <RevealImage
                    src={member.image}
                    alt={member.alt}
                    fill
                    delay={index * STAGGER}
                    sizes="(min-width: 64rem) 30vw, (min-width: 48rem) 45vw, 100vw"
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.itemTitle}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                <p>{member.bio}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
