const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: process.env.MFE_POSTS_DOMAIN,
  },
})
