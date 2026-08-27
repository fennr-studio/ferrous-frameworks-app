/**
 * Every placeholder from the reference lives here and nowhere else, so
 * replacing them with real details is a single-file change.
 *
 * PLACEHOLDER (Wix template defaults, not real): phone, email, address,
 * social URLs, and the 2035 copyright year.
 */
export const site = {
  name: 'Ferrous',
  legalName: 'Ferrous Frameworks',
  /** Caption in the hero's yellow panel — intentional, not a typo. */
  heroCaption: 'FERROUS CONSTRUCTIONS & CO',
  tagline: ['FERROUS FRAMEWORKS.', 'ARCHITECTURAL PRECISION.', 'INDUSTRIAL SCALE.'],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  phone: '123 456 7890',
  email: 'info@mysite.com',
  address: ['500 Terry Francine Street,', 'San Francisco, CA 94158'],
  copyrightYear: '2035',
} as const;
