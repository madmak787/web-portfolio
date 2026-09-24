/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export, deployed to Hostinger shared hosting over FTPS.
	output: "export",
	trailingSlash: true,
	images: { unoptimized: true },
};

export default nextConfig;
