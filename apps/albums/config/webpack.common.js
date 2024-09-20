const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { VueLoaderPlugin } = require('vue-loader')
const packageJson = require('../package.json')
const path = require('path')

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src'),
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'albums',
      filename: 'remoteEntry.js',
      exposes: {
        './AlbumsIndex': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '../src/'),
    },
  },
}
