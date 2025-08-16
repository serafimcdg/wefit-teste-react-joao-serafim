/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: false,
      pure: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wefit-react-web-test.s3.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
