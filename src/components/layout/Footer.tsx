import Link from 'next/link';
import { site } from '@/data/site';
import { legalLinks, navLinks, socialLinks } from '@/data/navigation';
import { Container } from '@/components/ui/Container';
import { Logo } from './Logo';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" aria-label={`${site.name} home`}>
              <Logo />
            </Link>
            <p className={styles.tagline}>
              {site.tagline.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>

          <div>
            <h2 className={styles.heading}>[ Contact ]</h2>
            <address className={styles.address}>
              {/* tel: and mailto: make these actionable on mobile. */}
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              {site.address.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          </div>

          <div>
            <h2 className={styles.heading}>[ Social ]</h2>
            <ul className={styles.list}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {/* rel="noopener noreferrer" on every external target: stops
                      the opened page reaching back via window.opener. */}
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.heading}>[ Navigation ]</h2>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.legal}>
          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <p>
            &copy; {site.copyrightYear} by {site.name}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
