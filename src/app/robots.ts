import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

/** Served at /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Legal pages are also noindex'd via their own metadata.
      disallow: ['/privacy-policy', '/accessibility-statement'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
