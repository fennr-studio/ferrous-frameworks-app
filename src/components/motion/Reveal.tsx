'use client';

import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '@/lib/hooks/useInView';
import styles from './Reveal.module.css';

/** Gap between siblings in a staggered group, in ms. */
export const STAGGER = 90;

type Variant = 'rise' | 'fade' | 'left' | 'right' | 'scale';

type Props = {
  /** Element to render. Use `li`/`section` etc. so the markup stays semantic. */
  as?: ElementType;
  variant?: Variant;
  /** Delay in ms. For a list, pass `index * STAGGER`. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Reveals its children when they scroll into view.
 *
 * The hidden starting state lives in CSS behind `html.js`, which the root
 * layout sets before first paint. That ordering matters: without JavaScript
 * nothing is ever hidden, and with it there is no flash of positioned content
 * before the observer attaches.
 */
export function Reveal({
  as: Tag = 'div',
  variant = 'rise',
  delay = 0,
  className = '',
  children,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${styles[variant]} ${className}`.trim()}
      data-revealed={inView}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
