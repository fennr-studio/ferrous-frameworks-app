import { services } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Rule } from '@/components/ui/Rule';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import styles from './Services.module.css';

export function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <Container>
        {/* Inside the container: the reference's rule runs 46 -> 1438, not
            edge to edge. */}
        <Rule />
        <div className={styles.head}>
          <SectionHeading
            eyebrow="01 / Services"
            title="What We Build"
            intro="Expertise across every sector, delivered with unwavering precision and industrial strength."
          />
        </div>

        {/* A list, because it IS a list — screen readers announce the count. */}
        <ul className={styles.grid}>
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.number}
              className={styles.item}
              delay={index * STAGGER}
            >
              <hr className={styles.itemRule} />
              <p className={styles.number}>{service.number}</p>
              <h3 className={styles.title}>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
