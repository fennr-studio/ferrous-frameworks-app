import styles from './SkipLink.module.css';

/**
 * First focusable element on the page. Lets keyboard and screen-reader users
 * jump past the header straight to content, rather than tabbing the nav on
 * every page load. Visually hidden until focused.
 */
export function SkipLink() {
  return (
    <a href="#main" className={styles.skip}>
      Skip to content
    </a>
  );
}
