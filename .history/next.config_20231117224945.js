/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co","images.pexels"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
