import Link from 'next/link';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { HeaderMotion } from './HeaderMotion';
import styles from './Header.module.css';

/**
 * Fixed and overlaying content, matching the reference. Desktop nav is a
 * VERTICAL stack — unusual, and deliberate.
 *
 * The <header> element itself is rendered by HeaderMotion, the one client
 * boundary here; everything below is still server-rendered and passed through
 * as children. Only MobileMenu adds JavaScript of its own.
 */
export function Header() {
  return (
    <HeaderMotion>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Ferrous home">
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.cta}>
          <Button href="/contact">Get a quote</Button>
        </div>

        <MobileMenu />
      </div>
    </HeaderMotion>
  );
}
