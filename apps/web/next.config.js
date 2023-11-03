const SuperNova = require('@stellaria/supernova/next');

const withExcss = SuperNova.default();

module.exports = withExcss({
  reactStrictMode: true,
  transpilePackages: ["@stellaria/supernova/next", "@stellaria/supernova/next"],
});
