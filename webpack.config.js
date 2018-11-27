const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

const config = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, './dist')
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
  plugins: [new ManifestPlugin()]
};

module.exports = config;
