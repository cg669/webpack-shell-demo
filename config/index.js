'use strict'

const path = require('path')

module.exports = {
    //  配置本地服务
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        //  服务设置
        host: 'localhost',
        port: 7001,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,

        //  是否开启lint模式
        useEslint: true,
        showEslintErrorsInOverlay: false,

        cssSourceMap: true
    },
    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        //  开启压缩js,css
        productionGzip: true,
        productionGzipExtensions: ['js', 'css'],
    }
}