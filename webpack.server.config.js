const getBaseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, args) => {
  const base = getBaseConfig(env, args);

  return merge(base, {
    target: 'node',
    entry: {
      app: './src/server/server.tsx',
    },
    output: {
      filename: 'server.js',
    },
    externals: [nodeExternals()],
    node: {
      __dirname: false,
      __filename: false,
    },
  });
};
