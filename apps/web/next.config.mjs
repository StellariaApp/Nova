// const SuperNova = require('@stellaria/supernova/next');
import SuperNova from '../../packages/supernova/dist/plugins/next.mjs';

const withExcss = SuperNova();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@stellaria/supernova", "@stellaria/supernova/next"],
};


export default withExcss(nextConfig);
