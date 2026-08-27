'use client';

import type { ReactNode } from 'react';
import { useScrolled } from '@/lib/hooks/useScrolled';
import { useHideOnScroll } from '@/lib/hooks/useHideOnScroll';
import styles from './HeaderMotion.module.css';

/**
 * Client shell around the header.
 *
 * Only this wrapper is a Client Component — the brand, nav and CTA are passed
 * through as `children`, so they stay server-rendered and ship no JavaScript.
 * It does two things: backs the bar once the page scrolls away from the top,
 * and slides the whole header up out of view while scrolling down, back
 * down into place on scroll up.
 */
export function HeaderMotion({ children }: { children: ReactNode }) {
  /*
   * Deliberately a hair off zero rather than the hook's 80px default.
   *
   * The bar is a transparent overlay, so page content scrolls up THROUGH it.
   * At 80px the first content was already entering the header band before the
   * background had engaged, which put page text on top of the nav links. Any
   * scroll at all now turns the background on, so the collision window closes
   * before content can reach it — while the header still sits transparent over
   * the hero at rest, which is the look the reference has.
   */
  const scrolled = useScrolled(8);
  const hidden = useHideOnScroll();

  return (
    <header className={styles.header} data-scrolled={scrolled} data-hidden={hidden}>
      {children}
    </header>
  );
}
