// vue.config.js  修改
const debug = process.env.NODE_ENV !== 'production'
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}

// cdn预加载使用
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
  vant: 'vant'
}

const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: [],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.6.4/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/vant@1.6.1/lib/vant.min.js'
    ]
  }
}

module.exports = {
  // 基本路径 rent/
  publicPath: debug ? '/' : '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  productionSourceMap: false,
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })

    // 配置别名
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('mixins', resolve('src/mixins'))

    if (process.env.NODE_ENV === 'production') {
      // 生产环境不打包externals下的资源
      config.externals(externals)

      // 启用GZip压缩
      config
        .plugin('compression')
        .use(CompressionPlugin, {
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
        .tap(() => {})
    }

    // svg loader
    const svgRule = config.module.rule('svg') // 找到svg-loader
    svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
    svgRule // 添加svg新的loader处理
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule('images')
    imagesRule.exclude.add(resolve('src/icons'))
    config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
  },
  configureWebpack: config => {
    // 开发环境配置
    if (debug) {
      config.devtool = '#source-map'
    } else {
      // splitChunk 配置
      // 将每个依赖包打包成单独的js文件
      // let optimization = {
      //   runtimeChunk: 'single',
      //   splitChunks: {
      //     chunks: 'all',
      //     maxInitialRequests: Infinity,
      //     minSize: 20000,
      //     cacheGroups: {
      //       vendor: {
      //         test: /[\\/]node_modules[\\/]/,
      //         name(module) {
      //           // get the name. E.g. node_modules/packageName/not/this/part.js
      //           // or node_modules/packageName
      //           const packageName = module.context.match(
      //             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
      //           )[1]
      //           // npm package names are URL-safe, but some servers don't like @ symbols
      //           return `npm.${packageName.replace('@', '')}`
      //         }
      //       }
      //     }
      //   }
      // }
      // Object.assign(config, {
      //   optimization
      // })
    }

    // 配置骨架屏
    config.plugins.push(
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: resolve('./src/components/zv-skeleton/index.js')
          }
        },
        quiet: true,
        minimize: true
      })
    )
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hot: true,
    hotOnly: true
  },
  parallel: require('os').cpus().length > 1,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      },
      sass: {
        data: `@import "@/assets/styles/zv-color.scss";@import "@/assets/styles/mixin.scss";@import "@/assets/styles/vant.scss";`
      }
    }
  }
}
