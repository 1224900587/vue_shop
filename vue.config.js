module.exports = {
  publicPath: '/',

  devServer: {
    proxy: {
      '/kylinsite': {
        pathRewrite: {
          '^/kylinsite': '/kylinsite' // rewrite path
        },
        target: 'http://47.111.172.35:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
