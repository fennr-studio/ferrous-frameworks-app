/**
 * Every placeholder from the reference lives here and nowhere else, so
 * replacing them with real details is a single-file change.
 *
 * PLACEHOLDER (Wix template defaults, not real): phone, email, address,
 * social URLs, and the 2035 copyright year.
 */
/**
 * The canonical origin, resolved at build time.
 *
 * `??` was not enough here: an env var that is *defined but empty* — which is
 * what a blank field in a hosting dashboard produces, and what Next inlines
 * for an unset NEXT_PUBLIC_* var — passes a `??` check and then throws inside
 * `new URL('')`, failing the whole build. `||` treats empty as absent.
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL (stable, the production
 * domain) and VERCEL_URL (this specific deployment), neither prefixed with a
 * scheme. They are server-only vars, which is fine: `site.url` is read solely
 * from server code (layout metadata, robots.ts, sitemap.ts).
 *
 * Set NEXT_PUBLIC_SITE_URL to override with a real custom domain.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');

  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  return 'http://localhost:3000';
}

export const site = {
  name: 'Ferrous',
  legalName: 'Ferrous Frameworks',
  /** Caption in the hero's yellow panel — intentional, not a typo. */
  heroCaption: 'FERROUS CONSTRUCTIONS & CO',
  tagline: ['FERROUS FRAMEWORKS.', 'ARCHITECTURAL PRECISION.', 'INDUSTRIAL SCALE.'],
  url: resolveSiteUrl(),
  phone: '123 456 7890',
  email: 'info@mysite.com',
  address: ['500 Terry Francine Street,', 'San Francisco, CA 94158'],
  copyrightYear: '2035',
} as const;
