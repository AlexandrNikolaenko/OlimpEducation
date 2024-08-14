/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'disk.yandex.ru',
        }]
    }
};

export default nextConfig;
