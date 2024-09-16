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
      name: 'container',
      remotes: {
        postsApp: `posts@${process.env.MFE_POSTS_DOMAIN}remoteEntry.js`,
        albumsApp: `albums@${process.env.MFE_ALBUMS_DOMAIN}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
}
