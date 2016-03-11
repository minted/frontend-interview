'use strict';

var path = require('path');

module.exports = {
  entry: {
    'dom-rendering': './playground/dom-rendering/main',
    'interactive-ui-vote': './playground/interactive-ui/vote'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|vendor)/,
        loader: 'babel?presets[]=es2015&presets[]=react' // support es2015 and jsx out of the box
      }
    ]
 }
};
