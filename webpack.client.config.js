const path = require('path');
const fs = require('fs');
const getBaseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const dotenv = require('dotenv');

const currentPath = path.join(__dirname);

const processEnvFiles = mode => {
  const modeFile = mode === 'none' ? 'local' : mode;

  const baseEnvPath = `${currentPath}/.env`;
  const envPath = `${baseEnvPath}.${modeFile}`;
  const finalPath = fs.existsSync(envPath) ? envPath : baseEnvPath;
  const fileEnv = dotenv.config({
    path: finalPath,
  }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    const prevCopy = JSON.parse(JSON.stringify(prev));

    prevCopy[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prevCopy;
  }, {});

  return envKeys;
};

module.exports = (env, args) => {
  const isProduction = args.mode === 'production';

  const base = getBaseConfig(env, args);

  return merge(base, {
    target: 'web',
    entry: {
      app: './src/main.tsx',
    },
    output: {
      filename: isProduction ? './bundle.[hash].js' : './bundle.js',
      chunkFilename: '[name].bundle.js',
    },
    plugins: [new webpack.DefinePlugin(processEnvFiles(args.mode))],
  });
};
