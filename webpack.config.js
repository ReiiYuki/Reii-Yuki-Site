const webpack = require("webpack");
const path = require("path");
const autoprefixer = require('autoprefixer');
if (global.Promise == null) {
  global.Promise = require('es6-promise')
}
module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app/index.js'
  ],
  output: {
    publicPath: "/dist/js/",
    path: path.join(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  module: {
    loaders:[
      {test: /\.js$/,loaders: ['babel?cacheDirectory'],exclude: /(node_modules|bower_components)/,},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.json$/, loader: 'json-loader'},
      {test: /\.scss$/,loaders: ['style', 'css', 'sass','postcss']}
    ]
  },
  postcss:function () {
    return [autoprefixer];
  }
}
