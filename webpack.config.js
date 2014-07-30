/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */

'use strict';

var webpack = require('webpack');

module.exports = {
  output: {
    path: __dirname,
    filename: 'main.js',
    publicPath: '/scripts/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack/hot/dev-server',
    './src/scripts/components/<%= pkg.mainInput %>.jsx'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.gif/,
      loader: 'url-loader?limit=10000&minetype=image/gif'
    }, {
      test: /\.jpg/,
      loader: 'url-loader?limit=10000&minetype=image/jpg'
    }, {
      test: /\.png/,
      loader: 'url-loader?limit=10000&minetype=image/png'
    }, {
      test: /\.jsx$/,
      loaders: ['react-hot', 'jsx']
    }, {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader"
    }, {
      test: /\.woff$/,
      loader: "url-loader?prefix=font/&limit=5000"
    }, {
      test: /\.eot$/,
      loader: "file-loader?prefix=font/"
    }, {
      test: /\.ttf$/,
      loader: "file-loader?prefix=font/"
    }, {
      test: /\.svg$/,
      loader: "file-loader?prefix=font/"
    }]
  }
};
