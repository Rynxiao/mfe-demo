const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('../package.json')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
  },
  devServer: {
    port: 8081,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'posts',
      filename: 'remoteEntry.js',
      exposes: {
        './PostsIndex': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}
