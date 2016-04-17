/* global
  __dirname,
  module,
  process,
  require
*/

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot', 'babel' ],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
  resolve: {
    root: path.resolve(__dirname),
    alias: {
      components: 'src/components',
      dux: 'src/dux',
      utils: 'src/utils',
      config: 'src/config',
      theme: 'src/theme',
    },
    extensions: ['', '.js'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    bufferutil: 'empty',
  },
}
