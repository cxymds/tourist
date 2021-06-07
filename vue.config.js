module.exports ={
  devServer: {
    proxy: {
      "/api": {
        target:
          "http://4am.pub:3000", // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },
  lintOnSave: false
}