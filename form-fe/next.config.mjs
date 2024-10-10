/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:5087/api/:path*' // Proxy to Backend
            }
        ]
    }
};

export default nextConfig;
