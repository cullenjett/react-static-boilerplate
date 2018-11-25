const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    libraryTarget: 'umd'
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      paths: ['/hello/', '/world/'],
      locals: {
        greet: 'Hello'
      },
      globals: {
        window: {}
      }
    })
  ]
};

module.exports = config;
