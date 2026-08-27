import styles from './Eyebrow.module.css';

/**
 * The bracketed section marker, e.g. [01 / SERVICES].
 * Brackets are added here so callers pass only the text — keeps the
 * inconsistent spacing of the reference from leaking into the data.
 */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className={styles.eyebrow}>[{children}]</p>;
}
