import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import styles from './status.module.css';

/**
 * Rendered for unmatched routes AND whenever notFound() is called.
 * Next serves this with a real HTTP 404, which matters for crawlers.
 */
export default function NotFound() {
  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.copy}>
          That page doesn&apos;t exist, or it has moved. The links below still work.
        </p>
        <div className={styles.actions}>
          <Button href="/">Back to home</Button>
          <Button href="/projects" variant="outline">
            View projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
