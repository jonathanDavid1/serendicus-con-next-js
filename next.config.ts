// next.config.ts
import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, 'components'),
      '@src': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;