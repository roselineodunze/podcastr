/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laudable-meadowlark-591.convex.cloud',
      },
    ],
  },
};

export default nextConfig;
