// vue.config.js
module.exports = {
  // webpack-dev-server配置
  devServer: {
    disableHostCheck: true,
    open: true, // 打开浏览器
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://192.168.1.198:9501/api/", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        ws: true, // 是否启用websockets
        pathRewrite: {
          // "^/api": "/"
          "^/fun": "/"
        }
      }
    },
  },
}
