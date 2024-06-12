/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
    
        },
      ],
    },
  }

 export default nextConfig;