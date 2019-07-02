/*
Author: Carl Flint

Webpack configuration
*/

const webpack = require('webpack');
const path = require('path');
const port = require('.').port;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    devtool: 'cheap-module-source-map',
    entry: {
      home: './src/js/home/index.js',
      about: './src/js/about/index.js',
      committees: './src/js/committees/index.js',
      partners: './src/js/partners/index.js',
      vendor: [
        'jquery',
        'bootstrap',
        'backbone'
      ]
    },
    // node: {fs: 'empty'},
    // target: 'node'
    output: {
      filename: '[name]-bundle.js',
      // path: path.resolve(__dirname, '/src/build')
      path: path.resolve('./public/build')
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' }, {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
        }, {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        }, {
          test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
          use: [{
            loader: "file-loader"
          }]
        }, {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10000',
            'img-loader'
          ]
        }
      ]
    },
    plugins: [
      //common chunks
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', // Specify the common bundle's name.
        filename: 'vendor-bundle.js',
        minChunks: function(module) {
          // this assumes your vendor imports exist in the node_modules directory
          return module.context && module.context.indexOf('node_modules') !== -1;
        }
      }),
      new ExtractTextPlugin({ //for css extraction
        filename: "./[name]-style.css",
        // disable: process.env.NODE_ENV === "development",
        allChunks: true
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        _: 'lodash',
        Backbone: 'backbone'
      })
    ],
    //package name resolver
    resolve: {
      // alias: {
      //   jquery: 'jquery-3.1.1/jquery.min.js',
      //   underscore: 'underscore/underscore-min.js',
      //   backbone: 'backbone/backbone-min.js'
      // },
      // modules: ['lib', 'bower_components', 'node_modules']
    }
  };
};

