/** @type {import('next').NextConfig} */
// Static export works on Vercel, GitHub Pages and any static host.
// For a GitHub Pages project site (https://<user>.github.io/<repo>), set
// NEXT_PUBLIC_BASE_PATH=/<repo> at build time. Leave it empty for a custom domain or Vercel.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
