/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'http',
            hostname: 'disk.yandex.ru',
        },
        {
            protocol: 'https',
            hostname: 'disk.yandex.ru',
        }]
    },
    distDir: 'dist'
};

export default nextConfig;
