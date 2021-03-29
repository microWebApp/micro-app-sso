module.exports = {
  // publicPath: '/account'
  devServer: {
    host: '127.0.0.1',
    port: 8281
  },
  configureWebpack: {
    externals: ['vue', 'vue-router', /^@patpat-f2e\/.+/]
  }
}
