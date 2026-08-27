'use client';

import { Fragment } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/lib/hooks/useInView';
import styles from './RevealText.module.css';

/** Gap between consecutive words, in ms. */
const WORD_STAGGER = 55;

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'p';
  /** Plain text — it gets split on spaces, so it cannot contain markup. */
  children: string;
  className?: string;
  /** Delay before the first word, in ms. */
  delay?: number;
  id?: string;
};

/**
 * Display headings that rise into place a word at a time from behind a mask.
 *
 * Each word keeps its own real space between spans, so the text still wraps
 * normally and still reads as one string to a screen reader.
 */
export function RevealText({
  as: Tag = 'h2',
  children,
  className = '',
  delay = 0,
  id,
}: Props) {
  const { ref, inView } = useInView<HTMLHeadingElement>();
  const words = children.split(' ');

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.text} ${className}`.trim()}
      data-revealed={inView}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className={styles.word}>
            <span
              className={styles.inner}
              style={
                { '--word-delay': `${delay + index * WORD_STAGGER}ms` } as CSSProperties
              }
            >
              {word}
            </span>
          </span>
          {index < words.length - 1 ? (' ' as ReactNode) : null}
        </Fragment>
      ))}
    </Tag>
  );
}
