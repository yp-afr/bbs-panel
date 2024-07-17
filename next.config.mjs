/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/panel/dashboard',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
