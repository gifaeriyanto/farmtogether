const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  eslint: {
    dirs: ['pages', 'app'],
  },

  async rewrites() {
    return [
      {
        destination: `${process.env.API_BASE_URL}/api/:path*`, // Proxy to Backend
        source: '/api/ft/:path*',
      },
      {
        destination: process.env.API_COUNTRIES, // Proxy to restcountries.com
        source: '/api/countries',
      },
    ];
  },

  // webpack config
  webpack(config, _options) {
    // aliases
    config.resolve.alias.static = path.join(__dirname, 'public');

    config.plugins.push(new Dotenv({ silent: true }));

    return config;
  },

  eslint: {
    dirs: ['app', 'pages'], // Only run ESLint on the 'app' and 'pages' directories during production builds (next build)
  },
};

module.exports = nextConfig;
