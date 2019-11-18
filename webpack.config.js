const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const dotenv = require('dotenv');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

const inAnalyze = process.env.ANALYZE === 'true';
const getPath = file => path.resolve(__dirname, file);
const currentPath = path.join(__dirname);

const processEnvFiles = mode => {
  const baseEnvPath = `${currentPath}/.env`;
  const envPath = `${baseEnvPath}.${mode}`;
  const finalPath = fs.existsSync(envPath) ? envPath : baseEnvPath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    const prevCopy = JSON.parse(JSON.stringify(prev));

    prevCopy[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prevCopy;
  }, {});

  return envKeys;
};

module.exports = (env, args) => {
  const isProduction = args.mode === 'production';

  const config = {
    entry: {
      app: './src/main.tsx',
    },
    output: {
      filename: isProduction ? './bundle.[hash].js' : './bundle.js',
      chunkFilename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '@core': getPath('./src/app'),
        '@environments': getPath('./src/environments'),
        '@assets': getPath('./src/assets/'),
        '@pages': getPath('./src/app/pages'),
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
    bail: isProduction,
    optimization: {
      minimize: isProduction,
      minimizer: isProduction ? [new TerserPlugin()] : [],
    },
    devtool: !isProduction ? 'source-map' : 'none',
    plugins: [
      new webpack.DefinePlugin(processEnvFiles(args.mode)),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inject: false,
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
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
        chunkFilename: '[id].css',
      }),
      new CopyWebpackPlugin([
        {
          from: 'public',
          ignore: ['index.html']
        }
      ])
    ]
      .concat(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()])
      .concat(inAnalyze ? [new BundleAnalyzerPlugin()] : []),
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 4200,
      hot: true,
      inline: true,
      writeToDisk: true,
      historyApiFallback: true,
    },
  };
  return config;
};
