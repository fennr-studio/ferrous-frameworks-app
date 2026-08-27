import type { TeamMember, Value } from '@/types';
import aboutHero from '@/assets/images/about-hero.jpg';
import aboutSnippet from '@/assets/images/about-snippet.jpg';
import cta from '@/assets/images/cta.jpg';
import hero from '@/assets/images/hero.jpg';
import islaGrant from '@/assets/images/team-isla-grant.jpg';
import leoValdez from '@/assets/images/team-leo-valdez.jpg';
import marcusThorne from '@/assets/images/team-marcus-thorne.jpg';

export const values: Value[] = [
  {
    number: '01',
    title: 'Safety',
    description:
      'We uphold the highest safety standards to protect our crew and the integrity of every project site.',
  },
  {
    number: '02',
    title: 'Integrity',
    description:
      'Honesty and transparency are the pillars of our operations, from initial bidding to the final build.',
  },
  {
    number: '03',
    title: 'Quality',
    description:
      'Structural excellence is non-negotiable, ensuring that every framework we erect is built to last.',
  },
];

export const team: TeamMember[] = [
  {
    name: 'Marcus Thorne',
    role: 'Chief Executive Officer',
    bio: "Leading with iron-clad integrity and a vision for industrial scale excellence since Ferrous' foundation.",
    image: marcusThorne,
    alt: 'Portrait of Marcus Thorne',
  },
  {
    name: 'Isla Grant',
    role: 'Lead Engineer',
    bio: 'Precision-driven engineering expert ensuring every structure exceeds global safety and structural standards.',
    image: islaGrant,
    alt: 'Portrait of Isla Grant on a construction site',
  },
  {
    name: 'Leo Valdez',
    role: 'Project Manager',
    bio: 'Mastering complex logistics to deliver structural superiority on every timeline without compromise.',
    image: leoValdez,
    alt: 'Portrait of Leo Valdez',
  },
];

export const aboutHeroImage = {
  src: aboutHero,
  alt: 'Steel and concrete structure under construction',
};
export const aboutSnippetImage = {
  src: aboutSnippet,
  alt: 'Tower crane above a concrete frame in black and white',
};
export const heroImage = {
  src: hero,
  alt: 'Interior of a vast concrete-framed industrial hall with skylights',
};
export const ctaImage = {
  src: cta,
  alt: 'Steel roof trusses against a cloudy sky in black and white',
};
