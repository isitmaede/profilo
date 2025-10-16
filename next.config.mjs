// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... إعداداتك هنا
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '/54179/**', 
      },
    ],
  },
};

// ✅ استخدم export default بدلاً من module.exports
export default nextConfig;