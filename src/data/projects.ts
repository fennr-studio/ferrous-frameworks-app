import type { Project } from '@/types';

const CDN = 'https://static.wixstatic.com/media';

export const projects: Project[] = [
  {
    slug: 'vanguard-tower',
    number: '01',
    title: 'The Vanguard Tower',
    category: 'COMMERCIAL_DEVELOPMENT',
    categoryShort: 'Commercial',
    image: `${CDN}/11062b_266036d1199a48489abf771f89614afa~mv2.jpg`,
    width: 1100,
    height: 1326,
    alt: 'High-rise tower under construction with a tower crane against blue sky',
    featured: true,
  },
  {
    slug: 'orion-logistics-hub',
    number: '02',
    title: 'Orion Logistics Hub',
    category: 'INDUSTRIAL_INFRASTRUCTURE',
    categoryShort: 'Industrial',
    image: `${CDN}/11062b_0f594c6bce5841ad80043b561a101bbe~mv2.jpeg`,
    width: 1470,
    height: 980,
    alt: 'Aerial view of a logistics depot with lorries at loading bays',
    featured: true,
  },
  {
    slug: 'apex-bridge',
    number: '03',
    title: 'Apex Bridge',
    category: 'CIVIL_ENGINEERING',
    categoryShort: 'Civil Engineering',
    image: `${CDN}/11062b_8d487429d7a04579a886049ef170a543~mv2.jpeg`,
    width: 1470,
    height: 980,
    alt: 'Cable-stayed bridge pylon seen from below against clear sky',
    featured: true,
  },
  {
    slug: 'ironforge-foundry',
    number: '04',
    title: 'Ironforge Foundry',
    category: 'HEAVY_INDUSTRIAL',
    categoryShort: 'Heavy Industrial',
    image: `${CDN}/c837a6_02c3917b61b84175a7a25d33938fb301~mv2.jpg`,
    width: 1000,
    height: 1000,
    alt: 'Heavy industrial foundry structure',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
