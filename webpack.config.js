const path = require("path");
const process = require("process");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: false,
  entry: {
    background: "./src/Background.bs.js",
    options: "./src/Options.bs.js",
    content_script: "./src/ContentScript.bs.js",
    polyfill: "./node_modules/webextension-polyfill/dist/browser-polyfill.js"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['polyfill', 'options'],
      chunksSortMode: 'manual',
      filename: 'options.html',
      minify: false,
      scriptLoading: 'blocking'
    })
  ]
};
