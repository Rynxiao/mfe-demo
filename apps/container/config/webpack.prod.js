const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('../package.json')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: process.env.MFE_CONTAINER_DOMAIN,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        postsApp: `posts@${process.env.MFE_POSTS_DOMAIN}remoteEntry.js`,
        albumsApp: `albums@${process.env.MFE_ALBUMS_DOMAIN}remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
})
