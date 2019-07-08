const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.npm_lifecycle_event;
const inAnalyze = process.env.ANALYZE === 'true';
const isProduction = env.includes('prod');

const getPath = file => path.resolve(__dirname, file);

module.exports = {
  entry: {
    app: './src/main.tsx',
  },
  output: {
    filename: isProduction ? './bundle.[hash].js' : './bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@core': path.resolve(__dirname, './src/app/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, './src')],
        exclude: [getPath('node_modules'), getPath('**/*spec.ts')],
      },
      {
        test: /\.jsx?$/,
        loader: 'ts-loader',
        include: [getPath('./src')],
        exclude: [getPath('node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  bail: isProduction,
  devtool: !isProduction ? 'source-map' : 'none',
  plugins: [
    new webpack.ProvidePlugin({
      // global variables (just in case)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: isProduction ? {
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
      } : undefined,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
  ]
    .concat(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()])
    .concat(inAnalyze ? [new BundleAnalyzerPlugin()] : []),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
    hot: true,
    inline: true,
  },
};
