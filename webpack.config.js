const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    polyfill: '@babel/polyfill',
    main: path.resolve('src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    })
  ]
}
