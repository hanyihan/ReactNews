var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/src',
  	entry: "./js/index.js",
  	module: {
  		rules: [
  		{
  			test: /\.js?$/,
  			exclude: /node_modules/,
  			use: {
  				loader: 'babel-loader',
  				options: {
  					presets: ['es2015', 'react']
  				}
  			}
  		}]
  	},
  	output: {
  		path: __dirname + "/src/",
   		filename: 'bundle.js'
  	}
};