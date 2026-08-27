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

type Registry = {
  observer: IntersectionObserver;
  callbacks: Map<Element, (inView: boolean) => void>;
};

/*
 * One IntersectionObserver per distinct set of options, shared by every
 * element using it — not one per element.
 *
 * The home page reveals around thirty elements and they all use the same
 * defaults, so this is thirty observers collapsed into one. Each observer
 * carries its own bookkeeping and delivers its own callback batches; a single
 * one delivers every entry in one batch, which is both less setup work and
 * fewer separate callbacks competing during a scroll.
 */
const registries = new Map<string, Registry>();

function getRegistry(threshold: number, rootMargin: string): Registry {
  const key = `${threshold}|${rootMargin}`;
  let registry = registries.get(key);

  if (!registry) {
    const callbacks = new Map<Element, (inView: boolean) => void>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          callbacks.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { threshold, rootMargin },
    );
    registry = { observer, callbacks };
    registries.set(key, registry);
  }

  return registry;
}

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

    const { observer, callbacks } = getRegistry(threshold, rootMargin);

    const stop = () => {
      observer.unobserve(element);
      callbacks.delete(element);
    };

    callbacks.set(element, (isIntersecting) => {
      if (isIntersecting) {
        setInView(true);
        // Once revealed, drop out of the shared observer so it keeps shrinking
        // as the page settles rather than tracking elements that are done.
        if (once) stop();
      } else if (!once) {
        setInView(false);
      }
    });
    observer.observe(element);

    return stop;
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
