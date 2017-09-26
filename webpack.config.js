const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js",
    publicPath: '/ecommerce-with-react/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }, {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new ExtractTextPlugin({filename: 'app.css', allChunks: true, disable: false})],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};