const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    renderHtml: './src/renderHtml.js'
  },
  output: {
    filename: 'renderHtml.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['/hello', '/world'],
      globals: {
        window: {}
      }
    })
  ]
};

module.exports = config;
