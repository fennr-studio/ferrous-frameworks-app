'use client';

import { useEffect, useState } from 'react';

type Options = {
  /** Never hide above this scroll position, so the header is there on arrival. */
  threshold?: number;
  /**
   * Minimum movement before a direction change counts. Trackpads emit a lot of
   * sub-pixel noise and momentum wobble; without this the header flickers.
   */
  delta?: number;
};

/**
 * True while the page is being scrolled DOWN past `threshold`.
 *
 * Reads are batched into a single rAF so a fast flick cannot queue one React
 * render per scroll event, and the returned value only flips on a real
 * direction change — not on every frame of a continuous scroll.
 */
export function useHideOnScroll({ threshold = 150, delta = 6 }: Options = {}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const diff = y - lastY;

      // Below the noise floor: leave both `hidden` and `lastY` alone, so small
      // movements accumulate toward a real direction rather than being lost.
      if (Math.abs(diff) < delta) return;

      // Near the top the header always shows, whichever way we are going.
      setHidden(y > threshold && diff > 0);
      lastY = y;
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold, delta]);

  return hidden;
}
