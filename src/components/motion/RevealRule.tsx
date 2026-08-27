'use client';

import { useInView } from '@/lib/hooks/useInView';
import styles from './RevealRule.module.css';

/**
 * A hairline that draws itself left-to-right as it enters view. Used for the
 * full-bleed dividers that open each section.
 */
export function RevealRule({ className = '' }: { className?: string }) {
  const { ref, inView } = useInView<HTMLHRElement>();

  return (
    <hr
      ref={ref}
      className={`${styles.rule} ${className}`.trim()}
      data-revealed={inView}
    />
  );
}
