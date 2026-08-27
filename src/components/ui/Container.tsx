import styles from './Container.module.css';

/** Max-width + fluid gutters. One place to change page-wide horizontal rhythm. */
export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
