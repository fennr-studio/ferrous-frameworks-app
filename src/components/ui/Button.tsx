import Link from 'next/link';
import { ArrowBadge } from './ArrowBadge';
import styles from './Button.module.css';

type Variant = 'primary' | 'outline' | 'bare';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
};

/**
 * All three button treatments from the reference in one component:
 *   primary — black pill, white text, yellow arrow badge
 *   outline — transparent, 1px black border, black text, ink arrow badge
 *   bare    — no container, just label + ink arrow badge
 *
 * Renders next/link for internal hrefs (client-side navigation + prefetch)
 * and a plain anchor for external ones, with rel set correctly.
 */
export function Button({ href, children, variant = 'primary' }: Props) {
  const className = `${styles.button} ${styles[variant]}`;
  const badge = <ArrowBadge tone={variant === 'primary' ? 'yellow' : 'ink'} />;
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        {badge}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      <span>{children}</span>
      {badge}
    </Link>
  );
}
