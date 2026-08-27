import type { TeamMember, Value } from '@/types';

const CDN = 'https://static.wixstatic.com/media';

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
    image: `${CDN}/c837a6_a5e1e5dfba0a4d9aa28e97fdb8836d3d~mv2.jpg`,
    alt: 'Portrait of Marcus Thorne',
  },
  {
    name: 'Isla Grant',
    role: 'Lead Engineer',
    bio: 'Precision-driven engineering expert ensuring every structure exceeds global safety and structural standards.',
    image: `${CDN}/11062b_925e3a04f88244e7bf31142212769d93~mv2.jpg`,
    alt: 'Portrait of Isla Grant on a construction site',
  },
  {
    name: 'Leo Valdez',
    role: 'Project Manager',
    bio: 'Mastering complex logistics to deliver structural superiority on every timeline without compromise.',
    image: `${CDN}/c837a6_0d64224eed3f499381dfb0eadb304b14~mv2.jpg`,
    alt: 'Portrait of Leo Valdez',
  },
];

export const aboutHeroImage = {
  src: `${CDN}/c837a6_466d93c415bf4f14ba734f3b5f8e63df~mv2.jpg`,
  alt: 'Steel and concrete structure under construction',
};
export const aboutSnippetImage = {
  src: `${CDN}/c837a6_6f061b4898424924b0b92e5f77db2b67~mv2.jpg`,
  alt: 'Tower crane above a concrete frame in black and white',
};
export const heroImage = {
  src: `${CDN}/c837a6_ff7d61482797482c98cf6ac162b673b1~mv2.jpg`,
  alt: 'Interior of a vast concrete-framed industrial hall with skylights',
};
export const ctaImage = {
  src: `${CDN}/c837a6_c67c288fa8b44789b41327f572e77f93~mv2.jpg`,
  alt: 'Steel roof trusses against a cloudy sky in black and white',
};
