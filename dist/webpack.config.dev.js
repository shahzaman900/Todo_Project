"use strict";

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  devServer: {
    "static": './dist'
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  optimization: {
    runtimeChunk: 'single'
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    }]
  }
};