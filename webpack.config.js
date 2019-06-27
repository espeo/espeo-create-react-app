const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.npm_lifecycle_event;
const isProduction = env.includes('production');

const getPath = file => path.resolve(__dirname, file);

module.exports = {
  entry: {
    app: './src/main.ts',
  },
  output: {
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
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
    ],
  },
  optimization: {},
  devtool: !isProduction ? 'source-map' : 'none',
  plugins: [
    new webpack.ProvidePlugin({
      // global variables (just in case)
    }),
  ].concat(
    isProduction
      ? []
      : [
          new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
          }),
          new webpack.HotModuleReplacementPlugin(),
        ],
  ),
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4200,
    hot: true,
    inline: true,
  },
};
