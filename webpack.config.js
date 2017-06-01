const path = require('path');

module.exports = {
  entry: {
    '01_variables-parameters': './test/01_variables-parameters.spec.js',
  },
  output: {
    filename: '[name].spec.js',
    path: path.join(__dirname, 'test/dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/ },
      { test: /sinon\/pkg\/sinon\.js/, loader: 'imports?define=>false,require=>false' }
    ]
  },
  resolve : {
    alias: {
      sinon: 'sinon/pkg/sinon',
    },
  }
};