const path = require("node:path");

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@styles": path.resolve(__dirname, "src/app/styles"),
    };

    return config;
  },
};

module.exports = nextConfig;

