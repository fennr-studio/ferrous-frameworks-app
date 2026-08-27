'use client';

import { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import styles from './status.module.css';

/**
 * Route-level error boundary. MUST be a Client Component — React error
 * boundaries rely on class-component lifecycle that only runs on the client.
 *
 * `reset` re-attempts rendering the segment, which recovers from transient
 * failures without a full page reload.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Replace with a real error reporter (Sentry etc.) in production.
    console.error(error);
  }, [error]);

  return (
    <section className={styles.section}>
      <Container>
        <p className={styles.code}>500</p>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.copy}>
          An unexpected error occurred. Try again, and if it persists please get in touch.
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={reset} className={styles.retry}>
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
