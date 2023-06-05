/** @type {import('next').NextConfig} */
const nextConfig = {experimental: {serverActions: true, serverComponentsExternalPackages: ['bcrypt', '@prisma/client']}}

module.exports = nextConfig
