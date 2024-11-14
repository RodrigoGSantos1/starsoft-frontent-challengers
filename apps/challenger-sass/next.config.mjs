const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['./src/components', './src/pages'],
    prependData: `@import "@/styles/theme/main.scss";`,
  },
  swcMinify: true,
  transpilePackages: ['@starsoft/common'],
};

export default nextConfig;
