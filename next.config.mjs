/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'as2.ftcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'as1.ftcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_APP_BACKEND_URL,
    },
};

export default nextConfig;
