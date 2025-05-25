/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PRIVATE_API_URL: process.env.PRIVATE_API_URL,
  }
};

export default nextConfig;
