/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		APP_URL: process.env.APP_URL,
		API_URL: process.env.API_URL,
		JWT_SECRET: process.env.JWT_SECRET
	},
	images: {
		domains: ['avatars.githubusercontent.com']
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4000/uploads/:path*'
			}
		];
	}
};

export default nextConfig;
