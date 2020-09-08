"use strict";

module.exports = {
  devServer: {
    open: true,
    //是否自动弹出浏览器页面
    host: "localhost",
    port: '8081',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        //API服务器的地址
        changeOrigin: true,
        // 虚拟的站点需要更管origin
        secure: false,
        // 接受 运行在 https 上的服务
        pathRewrite: {
          //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
          '^/api': ''
        }
      }
    }
  }
};