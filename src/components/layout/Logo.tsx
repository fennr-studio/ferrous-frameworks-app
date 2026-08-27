import styles from './Logo.module.css';

/**
 * Checkerboard pixel mark + "Ferrous" wordmark, inlined as SVG.
 * Inline rather than a file: it's tiny, needs no extra request, and
 * inherits currentColor so it works on any panel background.
 *
 * The grid is 5 x 3 of square cells, read off the reference at 12.3px per
 * cell (61.5 x 37 overall). Cells are unit squares so the viewBox itself
 * carries the 5:3 aspect and the CSS only has to set one dimension.
 *
 *   # . # . .
 *   . # . # .
 *   # . # . #
 */
const CELLS = [
  [0, 0],
  [2, 0],
  [1, 1],
  [3, 1],
  [0, 2],
  [2, 2],
  [4, 2],
];

export function Logo() {
  return (
    <span className={styles.logo}>
      <svg viewBox="0 0 5 3" aria-hidden="true" className={styles.mark}>
        <g fill="currentColor">
          {CELLS.map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
          ))}
        </g>
      </svg>
      <span className={styles.word}>Ferrous</span>
    </span>
  );
}
