/** @type {import('next').NextConfig} */
const nextConfig = {
  // force fresh deploy
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;