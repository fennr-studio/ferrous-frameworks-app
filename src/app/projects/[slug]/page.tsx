import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, projects } from '@/data/projects';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Reveal, STAGGER } from '@/components/motion/Reveal';
import { RevealText } from '@/components/motion/RevealText';
import { RevealImage } from '@/components/motion/RevealImage';
import styles from './page.module.css';

/**
 * Dynamic route. generateStaticParams pre-renders one HTML file per project at
 * BUILD time, so these are static pages with no server work per request.
 *
 * CONTENT NOTE: the reference site has no project detail pages, so the only
 * facts that exist are title, category and image. Nothing here is invented.
 * Send project write-ups and this page grows a narrative section.
 */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// params is a Promise in Next 15+ — it must be awaited.
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: project.title,
    description: `${project.title} — ${project.category.replace(/_/g, ' ').toLowerCase()} by Ferrous Frameworks.`,
    // .src: OG metadata needs a plain URL, not the StaticImageData object.
    openGraph: { images: [{ url: project.image.src }] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  // Triggers the nearest not-found.tsx and sends a real 404 status.
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className={styles.article}>
      <Container>
        <Reveal as="p" className={styles.breadcrumb} variant="fade">
          <Link href="/projects">← All projects</Link>
        </Reveal>

        <div className={styles.head}>
          <Reveal as="span" className={styles.number}>
            {project.number}
          </Reveal>
          <RevealText as="h1" className={styles.title} delay={STAGGER}>
            {project.title}
          </RevealText>
          <Reveal as="p" className={styles.category} delay={STAGGER * 2}>
            {project.category}
          </Reveal>
        </div>

        <div className={styles.imageWrap}>
          <RevealImage
            src={project.image}
            alt={project.alt}
            fill
            priority
            quality={90}
            sizes="(min-width: 90rem) 1440px, 100vw"
            className={styles.image}
          />
        </div>

        {next ? (
          <Reveal className={styles.next}>
            <p className={styles.nextLabel}>Next project</p>
            <Button href={`/projects/${next.slug}`}>{next.title}</Button>
          </Reveal>
        ) : null}
      </Container>
    </article>
  );
}
