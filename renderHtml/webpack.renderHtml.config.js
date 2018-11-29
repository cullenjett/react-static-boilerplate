const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    renderHtml: path.resolve(__dirname, './renderHtml.js')
  },
  output: {
    filename: 'renderHtml.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src'),
          path.resolve(__dirname, './renderHtml.js')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      globals: {
        window: {},
        document: {}
      }
    })
  ]
};

module.exports = config;
