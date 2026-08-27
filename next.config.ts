import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Scaffolding against the Wix CDN so the site renders now. This makes
    // production depend on Wix staying up — replace with local files in
    // /public and update src/data/* when the assets arrive.
    // NOTE: `images.domains` is deprecated in v16; remotePatterns only.
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/media/**' },
    ],
    // v16 defaults qualities to [75]; allow a higher tier for hero art.
    qualities: [75, 90],
  },
};

export default nextConfig;
