import { Wix_Madefor_Display, Geist_Mono } from 'next/font/google';

/**
 * Fonts defined in ONE place, consumed everywhere via CSS variables.
 *
 * next/font downloads files at BUILD time and self-hosts them, so there is no
 * runtime request to fonts.googleapis.com on the critical path. It also
 * injects size-adjust fallback metrics, which is what prevents layout shift
 * when the webfont swaps in.
 */

export const sans = Wix_Madefor_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

/**
 * ASSUMPTION: the reference's display face is a mono with a dotted zero.
 * Geist Mono matches and is freely available. Swapping it is a two-line change
 * here — nothing downstream references a font name.
 */
export const mono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});
