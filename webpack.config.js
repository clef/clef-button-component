var path = require('path')
var webpack = require('webpack')
var packageJSON = require('./package.json')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')
var precss = require('precss')


var isDevelopment = process.env.NODE_ENV != "production"

module.exports = {
  debug: isDevelopment,
  cache: isDevelopment,
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : '',
  entry: './src/index.js',
  // Make all peerDependencies external by default. The only reason you would
  // not want to do this is if you were building a library for distribution
  // as a standalone file, rather than a module that will later be built
  // with a build tool like Webpack or Browserify
  //
  // For more information on when to use peerDependencies vs. dependencies,
  // please consult the README.
  externals: packageJSON.peerDependencies ? Object.keys(packageJSON.peerDependencies) : [],
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    library: 'clef-button-component',
    libraryTarget: 'umd',
  },
  module: {
    preLoaders: [{
      test: /\.(js|jql)$/,
      exclude: /node_modules|\.tmp|vendor/,
      loader: 'eslint-loader'
    }],
    loaders: [

      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader",
          "css-loader?modules&importLoaders=1!postcss-loader"
        )
      },
,
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },

    ]
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.json',
      '.css',
    ]
  },
  postcss: [autoprefixer(), precss()],
  plugins: [
    new ExtractTextPlugin("style.css", { allChunks: true })
  ]

};
