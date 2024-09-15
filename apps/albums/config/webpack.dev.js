const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].[contenthash].js',
  },
  devServer: {
    port: 8082,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'albums',
      filename: 'remoteEntry.js',
      exposes: {
        './AlbumsIndex': './src/index',
      },
    }),
  ],
}
