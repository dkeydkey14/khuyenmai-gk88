/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static HTML Export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Recommended for static export
  async redirects() {
    return [
      {
        source: '/favicon.ico',
        destination: '/images/GK88.png',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 