import type { Project } from '@/types';
import apexBridge from '@/assets/images/project-apex-bridge.jpg';
import ironforgeFoundry from '@/assets/images/project-ironforge-foundry.jpg';
import orionLogisticsHub from '@/assets/images/project-orion-logistics-hub.jpg';
import vanguardTower from '@/assets/images/project-vanguard-tower.jpg';

export const projects: Project[] = [
  {
    slug: 'vanguard-tower',
    number: '01',
    title: 'The Vanguard Tower',
    category: 'COMMERCIAL_DEVELOPMENT',
    categoryShort: 'Commercial',
    image: vanguardTower,
    alt: 'High-rise tower under construction with a tower crane against blue sky',
    featured: true,
  },
  {
    slug: 'orion-logistics-hub',
    number: '02',
    title: 'Orion Logistics Hub',
    category: 'INDUSTRIAL_INFRASTRUCTURE',
    categoryShort: 'Industrial',
    image: orionLogisticsHub,
    alt: 'Aerial view of a logistics depot with lorries at loading bays',
    featured: true,
  },
  {
    slug: 'apex-bridge',
    number: '03',
    title: 'Apex Bridge',
    category: 'CIVIL_ENGINEERING',
    categoryShort: 'Civil Engineering',
    image: apexBridge,
    alt: 'Cable-stayed bridge pylon seen from below against clear sky',
    featured: true,
  },
  {
    slug: 'ironforge-foundry',
    number: '04',
    title: 'Ironforge Foundry',
    category: 'HEAVY_INDUSTRIAL',
    categoryShort: 'Heavy Industrial',
    image: ironforgeFoundry,
    alt: 'Heavy industrial foundry structure',
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
