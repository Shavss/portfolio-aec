/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-aec',
  trailingSlash: true,
}

module.exports = nextConfig
