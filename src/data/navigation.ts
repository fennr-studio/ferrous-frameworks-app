import type { NavLink, SocialLink } from '@/types';

export const navLinks: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export const legalLinks: NavLink[] = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/accessibility-statement', label: 'Accessibility Statement' },
];

/** PLACEHOLDER: these point at Wix's own accounts on the reference site. */
export const socialLinks: SocialLink[] = [
  { href: 'https://www.instagram.com/wix', label: 'Instagram' },
  { href: 'https://www.facebook.com', label: 'Facebook' },
  // Reference spells this "Linkdin"; corrected here.
  { href: 'https://www.linkedin.com/company/wix-com', label: 'LinkedIn' },
  { href: 'https://x.com/wix', label: 'X' },
];
