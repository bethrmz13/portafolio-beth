import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  turbopack: {
    // Keep Next's workspace detection scoped to this application. The parent
    // directory contains an unrelated lockfile.
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;