const path = require('path')

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号,
// 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
const glob = require('glob')

// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
const PAGE_PATH = path.resolve(__dirname, '../src/pages')

// 用于做相应的merge处理
const merge = require('webpack-merge')

// pages 多入口配置
exports.setPages = configs => {
  let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  let map = {}

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'))
    let tmp = filePath.substring(0, filePath.lastIndexOf('/'))

    let conf = {
      // page 的入口
      entry: filePath,
      // 模板来源
      template: tmp + '.html',
      // 在 dist/index.html 的输出
      filename: filename + '.html',
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ['chunk-vendors', 'chunk-common', filename],
      inject: true
    }

    if (configs) {
      conf = merge(conf, configs)
    }

    if (process.env.NODE_ENV === 'production') {
      conf = merge(conf, {
        minify: {
          removeComments: true, // 删除 html 中的注释代码
          collapseWhitespace: true // 删除 html 中的空白符
          // removeAttributeQuotes: true // 删除 html 元素中属性的引号
        },
        chunksSortMode: 'manual' // 按 manual 的顺序引入
      })
    }

    map[filename] = conf
  })

  return map
}
