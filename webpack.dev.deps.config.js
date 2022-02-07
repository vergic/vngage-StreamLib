const path = require('path');
const helpers = require('./webpack.helpers.js');
const { IgnorePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/VngageStream.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vngageStreamLib.deps.js',
    library: 'vngageStreamLib',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true,
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ],
        exclude: /node_modules/
      }, {
        // Rule for transpiling js in selected "node_modules" (some modules are not distributed in es5)
        // We want a different config for those (e.g. without "babel-preset-react", etc)
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //babelrc: false,	// Babel-settings for transpiling "node_modules" should *NOT* use anything from .babelrc
              //cacheDirectory: true,
              //presets: ['@babel/env']
            }
          }
        ],
        // List node_modules to transpile (most do NOT require transpiling, as they are already es5...)
        include: helpers.includeNodeModules(['@microsoft\\signalr'])
      },
    ]
  },
  resolve: {
    fallback: {
      "buffer": false,
      "url": false,
      "util": false,
      "https": false,
      "http": false,
    },
  },
  plugins: [
    new IgnorePlugin({
      resourceRegExp: /^(tough-cookie|node-fetch|fetch-cookie|abort-controller|eventsource)$/,
    }),
  ],
};
