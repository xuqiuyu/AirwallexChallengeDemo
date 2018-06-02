const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaderUtils = require('loader-utils');
const merge = require('webpack-merge');
const path = require('path');

const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
  devtool: 'source-map',
  entry: './src',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                module: true,
                localIdentName: '[path][name]__[local]',
                getLocalIdent: (context, localIdentName, localName, options) => {
                  if (!options.context) {
                    options.context = context.options && typeof context.options.context === 'string' ? context.options.context : context.context;
                  }
                  const request = path.relative(options.context, context.resourcePath);
                  options.content = `${options.hashPrefix}${request}+${localName}`;

                  const _localIdentName = '[path][name]__[local]'.replace(/\[local\]/gi, localName);
                  const hash = loaderUtils.interpolateName(context, _localIdentName, options);
                  return `dist-${hash.replace(new RegExp('[^a-zA-Z0-9\\-_\u00A0-\uFFFF]', 'g'), '-').replace(/^((-?[0-9])|--)/, '_$1')}`;
                }
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                module: true
              }
            }
          ]
        })
      }, {
        test: /\.css$/,
        // loader: 'style-loader!css-loader?importLoaders=1'
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../view/template.html')
    }),
    new ExtractTextPlugin({ filename: '[name].[contenthash:8].css', allChunks: true })
  ]
});
