var webpack=require("webpack");
var path=require("path");

var config = {
  entry: './app/app.js',
  output: {
    filename: 'public/bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /node_modules/,
        loader : 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};

module.exports = config;

