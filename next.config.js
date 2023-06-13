/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    urlImports: [ 'https://link-sdk.codat.io' ],
  },
}

module.exports = nextConfig
