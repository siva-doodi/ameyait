/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static HTML export
  basePath: '/ameyait', // repo name here
  images: {
    unoptimized: true, // needed for GitHub Pages
  },
};

module.exports = nextConfig;
