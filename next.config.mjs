/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Desabilita a verificação do ESLint durante o build
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
