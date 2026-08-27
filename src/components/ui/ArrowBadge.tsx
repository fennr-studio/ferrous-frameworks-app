import styles from './ArrowBadge.module.css';

/** The circular arrow that appears inside every button variant. */
export function ArrowBadge({ tone }: { tone: 'yellow' | 'ink' }) {
  return (
    /* `arrow-badge` is a global class so Button.module.css can drive the
       hover state from the parent, across module boundaries. */
    <span className={`${styles.badge} ${styles[tone]} arrow-badge`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M5 12h13M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
