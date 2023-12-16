/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

};

module.exports = stylexPlugin({
    filename: 'stylex-bundle.css',
    rootDir: __dirname,
})(nextConfig);
