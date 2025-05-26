/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NILVA_APP_PUBLIC_API_URL: process.env.NILVA_APP_PUBLIC_API_URL,
    NILVA_APP_PRIVATE_API_URL: process.env.NILVA_APP_PRIVATE_API_URL,
  }
};

export default nextConfig;
