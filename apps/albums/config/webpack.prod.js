const { merge } = require('webpack-merge')
const { DefinePlugin } = require('webpack')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(false),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
    }),
  ],
})
