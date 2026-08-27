import type { StaticImageData } from 'next/image';

/**
 * Images are StaticImageData, not strings: they are imported from
 * src/assets so Next fingerprints them into /_next/static/media (served
 * immutable for a year), derives intrinsic dimensions, and generates the
 * blur placeholder. A bare URL string gets none of that.
 */
export type Service = { number: string; title: string; description: string };

export type Project = {
  slug: string;
  number: string;
  /** Canonical title. One record => homepage and /projects can never disagree. */
  title: string;
  /** Underscore-cased label as on the reference, e.g. COMMERCIAL_DEVELOPMENT */
  category: string;
  /** Short label used on the homepage grid, e.g. "Commercial" */
  categoryShort: string;
  image: StaticImageData;
  alt: string;
  featured: boolean;
};

export type Testimonial = {
  number: string;
  quote: string;
  author: string;
  role: string;
  image: StaticImageData;
  alt: string;
  panel: 'yellow' | 'orange' | 'blue';
  /** Which side the colour panel sits on at desktop widths. */
  side: 'left' | 'right';
};

export type Value = { number: string; title: string; description: string };

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: StaticImageData;
  alt: string;
};

export type NavLink = { href: string; label: string };
export type SocialLink = { href: string; label: string };
