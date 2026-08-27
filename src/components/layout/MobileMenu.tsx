'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import styles from './MobileMenu.module.css';

/**
 * The ONLY interactive part of the header, isolated so the rest of the
 * header stays a Server Component and ships no JavaScript.
 *
 * Accessibility handled here:
 *  - aria-expanded / aria-controls tie the button to the panel
 *  - Escape closes and returns focus to the toggle
 *  - body scroll locked while open
 *  - route change closes the menu (otherwise it stays open over the new page)
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barHidden : ''}`} />
        <span className={`${styles.bar} ${open ? styles.barBottom : ''}`} />
      </button>

      <div id="mobile-menu" className={styles.panel} hidden={!open}>
        <nav aria-label="Mobile">
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={styles.cta}>
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
