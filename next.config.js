/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a static 'out' folder instead of requiring a Node server
  reactStrictMode: true,
  images: {
    unoptimized: true, // GitHub Pages does not support default Next.js image optimization
  },
}

module.exports = nextConfig
