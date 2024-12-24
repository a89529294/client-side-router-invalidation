/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      static: 25,
    },
  },
};

module.exports = nextConfig;
