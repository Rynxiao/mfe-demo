const { ModuleFederationPlugin } = require('webpack').container
const packageJson = require('../package.json')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        postsApp: 'posts@http://localhost:8081/remoteEntry.js',
        albumsApp: 'albums@http://localhost:8082/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
  ],
})
