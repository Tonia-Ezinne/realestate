// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com", // Allow images from Cloudinary
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Allow images from Cloudinary
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Allow images from Google User Content
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
