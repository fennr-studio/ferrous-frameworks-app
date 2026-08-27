import type { NextConfig } from 'next';

const YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const nextConfig: NextConfig = {
  images: {
    /*
     * No remotePatterns any more. Every photo is imported from src/assets, so
     * Next fingerprints it into /_next/static/media and serves it immutable —
     * the site no longer depends on a third-party CDN staying up, and nothing
     * is fetched cross-origin on the critical path.
     */

    // AVIF first, WebP as the fallback. Encoding is slower but happens once
    // and is then cached; the payload is materially smaller than JPEG.
    formats: ['image/avif', 'image/webp'],

    // v16 defaults qualities to [75]; the hero art asks for 90.
    qualities: [75, 90],

    /*
     * A year. Safe precisely because the source filenames are content-hashed:
     * changing a photo changes its URL, so a stale cache entry can never be
     * served for new art. Without this the optimiser re-encodes far more often
     * than it needs to.
     */
    minimumCacheTTL: YEAR_IN_SECONDS,
  },

  async headers() {
    return [
      {
        // Anything the browser fetched under a hashed filename can be held
        // forever — a deploy that changes the file changes the URL.
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${YEAR_IN_SECONDS}, immutable`,
          },
        ],
      },
      {
        // Files served straight out of /public are NOT fingerprinted, so they
        // get a short freshness window plus a long stale-while-revalidate:
        // fast repeat views, but a replaced file still propagates.
        source: '/:path*.(svg|png|jpg|jpeg|gif|webp|avif|ico|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
