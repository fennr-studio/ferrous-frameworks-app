'use client';

import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { useInView } from '@/lib/hooks/useInView';
import styles from './RevealImage.module.css';

type Props = ImageProps & {
  /** Delay in ms, for staggering a grid of images. */
  delay?: number;
  /** Set on images whose caller styles them grayscale, so the blur-up keeps it. */
  tone?: 'default' | 'grayscale';
};

/**
 * next/image behind a clip mask.
 *
 * Three things happen together: the mask wipes open top-to-bottom, the frame
 * settles out of a slight overscale, and the blur placeholder clears once the
 * bitmap decodes.
 *
 * The mask is absolutely positioned so it fills the caller's existing
 * `position: relative` wrapper — `fill` keeps working and no caller CSS moves.
 * The overscale sits on an inner element rather than the image itself, which
 * leaves the image's own `transform` free for hover states.
 */
export function RevealImage({
  delay = 0,
  tone = 'default',
  className = '',
  // Destructured rather than left in the spread so the jsx-a11y rule can see
  // that every instance actually passes one.
  alt,
  ...imageProps
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [loaded, setLoaded] = useState(false);

  /*
   * Statically imported images ship a tiny base64 blurDataURL, so Next can
   * paint a real preview of the photo while the full file decodes. That beats
   * the CSS blur below, which can only blur an image that has already
   * arrived. Remote/string sources have no such data, so they keep the CSS
   * fallback and must not be given placeholder="blur".
   */
  const hasBlur = typeof imageProps.src === 'object' && imageProps.src !== null;

  return (
    <span
      ref={ref}
      className={styles.mask}
      data-revealed={inView}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      <span className={styles.inner}>
        <Image
          {...imageProps}
          alt={alt}
          placeholder={hasBlur ? 'blur' : undefined}
          className={`${styles.image} ${className}`.trim()}
          data-loaded={loaded}
          data-tone={tone}
          onLoad={() => setLoaded(true)}
        />
      </span>
    </span>
  );
}
