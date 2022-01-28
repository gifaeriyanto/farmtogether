const path = require('path');

const nextConfig = {
  eslint: {
    dirs: ['pages', 'app'],
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
