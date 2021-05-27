const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  // resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    publicPath: '/build/',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
  }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
