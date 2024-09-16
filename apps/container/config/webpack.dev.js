const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('../package.json')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
  },
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        postsApp: 'posts@http://localhost:8081/remoteEntry.js',
        albumsApp: 'albums@http://localhost:8082/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
}
