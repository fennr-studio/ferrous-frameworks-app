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
  image: string;
  width: number;
  height: number;
  alt: string;
  featured: boolean;
};

export type Testimonial = {
  number: string;
  quote: string;
  author: string;
  role: string;
  image: string;
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
  image: string;
  alt: string;
};

export type NavLink = { href: string; label: string };
export type SocialLink = { href: string; label: string };
