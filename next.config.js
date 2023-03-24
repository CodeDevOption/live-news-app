/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.euroweeklynews.com"],
  },
};

module.exports = nextConfig;
