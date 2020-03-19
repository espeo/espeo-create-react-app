const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');

const inAnalyze = process.env.ANALYZE === 'true';
const getPath = file => path.resolve(__dirname, file);

module.exports = (env, args) => {
  const isProduction = args.mode === 'production';

  const config = {
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@server': getPath('./src/server'),
        '@core': getPath('./src/app'),
        '@environments': getPath('./src/environments'),
        '@assets': getPath('./src/assets/'),
        '@pages': getPath('./src/app/pages'),
        '@styles': getPath('./src/app/styles'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          loader: 'ts-loader',
          include: [getPath('./src')],
          exclude: [getPath('node_modules'), getPath('**/*spec.ts')],
        },
        {
          test: /\.css$/,
          use: [
            'isomorphic-style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    bail: isProduction,
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [new TerserPlugin()] : [],
    },
    devtool: !isProduction ? 'source-map' : 'none',
    plugins: [
      ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
      ...(inAnalyze ? [new BundleAnalyzerPlugin()] : []),
    ],
  };

  return config;
};
