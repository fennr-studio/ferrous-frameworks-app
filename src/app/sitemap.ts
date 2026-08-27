import type { MetadataRoute } from 'next';
import { site } from '@/data/site';
import { projects } from '@/data/projects';

/**
 * File-convention route: Next serves this at /sitemap.xml automatically.
 * Generated from the same data that renders the pages, so it cannot drift.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/projects', '/contact'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
