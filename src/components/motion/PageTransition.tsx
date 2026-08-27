'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import styles from './PageTransition.module.css';

/**
 * Replays an enter animation on every route change.
 *
 * Keying on the pathname is what does it: React tears the subtree down and
 * remounts it, which restarts the CSS animation. A plain block wrapper, so
 * full-bleed sections inside are unaffected.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className={styles.page}>
      {children}
    </div>
  );
}
