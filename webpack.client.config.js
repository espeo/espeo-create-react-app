const path = require('path');
const fs = require('fs');
const getBaseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');
const dotenv = require('dotenv');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
      filename: isProduction ? '[name].bundle.[hash].js' : '[name].bundle.js',
    },
    optimization: isProduction
      ? {
          runtimeChunk: 'single',
          splitChunks: {
            cacheGroups: {
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
        }
      : {},
    plugins: [
      new webpack.DefinePlugin(processEnvFiles(args.mode)),
      new HtmlWebpackPlugin({
        template: './src/server/views/index.ejs',
        filename: 'index.ejs',
        inject: true,
        chunksSortMode: 'manual',
        chunks: ['runtime', 'vendors', 'app'],
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : undefined,
      }),
      new CopyWebpackPlugin([
        {
          from: 'public',
        },
      ]),
    ],
  });
};
