/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRss: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
