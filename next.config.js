/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co","images.pexels.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
