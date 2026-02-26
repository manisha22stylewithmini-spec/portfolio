/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
    },
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
};

export default nextConfig;
