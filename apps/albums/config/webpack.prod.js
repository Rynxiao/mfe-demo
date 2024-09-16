const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('../package.json')

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'albums',
      filename: 'remoteEntry.js',
      exposes: {
        './AlbumsIndex': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
}
