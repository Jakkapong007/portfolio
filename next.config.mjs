/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // For a project repo (username.github.io/repo-name), set this to /repo-name
  // For a personal repo (username.github.io), leave empty
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
    ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
    : '',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
