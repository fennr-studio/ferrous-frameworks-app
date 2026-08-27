'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  /** Fraction of the element that must be visible before it counts as in view. */
  threshold?: number;
  /**
   * Shrinks the viewport from the bottom so an element starts revealing a
   * little after its top edge crosses the fold, rather than the instant a
   * single pixel appears.
   */
  rootMargin?: string;
  /** Stop observing once revealed. Reveals are one-way by default. */
  once?: boolean;
};

/**
 * Reports whether the referenced element has entered the viewport.
 *
 * No support check here on purpose: the root layout only sets `html.js` when
 * IntersectionObserver exists, and every hidden state is scoped to that class.
 * A browser that cannot observe simply never hides anything in the first place.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0,
  rootMargin = '0px 0px -12% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
