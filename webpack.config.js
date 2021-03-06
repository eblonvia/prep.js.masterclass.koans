const path = require('path');

module.exports = {
  entry: {
    '01_basic': './test/basic.js',
    '02_advanced': './test/advanced.js',
    '03_es6': './test/es6.js',
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/ },
    ]
  },
};