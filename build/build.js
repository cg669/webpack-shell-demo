'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const spinner = ora({
    text:'来了老弟...',
    color: 'blue'
})
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.succeed('进展顺利，稍等就出锅')
    spinner.stop()
    if (err) throw err
    process.stdout.write('\n\n\n=============================================非礼勿视======================================================\n' + stats.toString({
      colors: true,
      moduleTrace: false,
      modules: false,
      children: false, 
      chunks: false,
      chunkModules: false
    }) + '\n\n\n=============================================非礼勿视======================================================\n\n\n')
    if (stats.hasErrors()) {
      console.warn(chalk.red('构建失败。\n'))
      process.exit(1)
    }

    console.info(chalk.cyan('  构建完成！！！\n'))
    console.info(chalk.blue.bold('  注意：') + chalk.yellow.underline('构建后的文件是在http服务中本地直接打开index.html并不会生效。\n'))
  })
})
