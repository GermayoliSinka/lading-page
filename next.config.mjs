/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    reactStrictMode: true,
    images: {
        unoptimized: true,
        domains: ['images.gr-assets.com'],
    },
};

export default nextConfig;
