const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const config = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['/hello', '/world'],
      globals: {
        window: {},
        document: {}
      }
    })
  ]
};

module.exports = config;
