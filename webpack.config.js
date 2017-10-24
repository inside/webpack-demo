const path = require('path');
const WebpackRequireFrom = require('webpack-require-from')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',

      }
    ]
  },
  plugins: [
    new WebpackRequireFrom({
      methodName: '__cdnJSPath'
    })
  ]
};
