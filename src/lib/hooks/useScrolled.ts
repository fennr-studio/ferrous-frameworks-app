'use client';

import { useEffect, useState } from 'react';

/**
 * True once the page has scrolled past `offset` pixels. Used by the header to
 * swap from transparent overlay to a backed bar.
 *
 * The listener is passive and only ever flips a boolean, so it cannot block
 * scrolling or thrash React with a render per pixel.
 */
export function useScrolled(offset = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);

    update(); // Correct for a restored scroll position on load.
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);

  return scrolled;
}
