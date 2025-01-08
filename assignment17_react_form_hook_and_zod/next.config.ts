import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
};

export default nextConfig;
