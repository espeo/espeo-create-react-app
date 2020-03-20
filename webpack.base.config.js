const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
            {
              loader: ExtractCssChunks.loader,
              options: {
                hmr: !isProduction,
              },
            },
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
        {
          test: /\.ejs$/,
          loader: 'raw-loader',
        },
      ],
    },
    bail: isProduction,
    devtool: !isProduction ? 'source-map' : 'none',
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
      new ExtractCssChunks({
        filename: !isProduction ? '[name].css' : '[name].[hash].css',
      }),
      ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
      ...(inAnalyze ? [new BundleAnalyzerPlugin()] : []),
    ],
  };

  return config;
};
