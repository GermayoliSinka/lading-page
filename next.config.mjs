/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        domains: ['images.gr-assets.com'], // Agrega aquí los dominios permitidos
    },
};

export default nextConfig;
