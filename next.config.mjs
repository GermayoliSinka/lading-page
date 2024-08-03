/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.gr-assets.com',
                pathname: '/**', // Permite cualquier ruta en este dominio
            },
        ],
    },
};

export default nextConfig;
