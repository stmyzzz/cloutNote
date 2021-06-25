module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
        target: 'http://localhost:3000',
        // 允许跨域
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            '^/api': ''
        }
      }
    }
  },
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/asset',
        'api':'@/api',
        'components':'@/components',
        'views':'@/views',
        'store':'@/store',
        'utils':'@/utils',
        'router':'@/router',
        'config':'@/config'
      }
    }
  },
  css: {
    loaderOptions: {
    sass: {
      prependData: `
        @import "@/style/mixin.scss";
        @import "@/style/common.scss";
      `
    },
    }
  }
}