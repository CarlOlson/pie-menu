const path = require("path");
const process = require("process");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: false,
  entry: {
    background: "./src/Background.bs.js",
    options: "./src/Options.bs.js",
    content_script: "./src/ContentScript.bs.js",
    polyfill: "./node_modules/webextension-polyfill/dist/browser-polyfill.js",
    styles: "./src/styles.css"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name].js"
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['styles', 'polyfill', 'options'],
      chunksSortMode: 'manual',
      filename: 'options.html',
      minify: false,
      scriptLoading: 'blocking'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
};
