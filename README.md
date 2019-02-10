# 中联前端开发基础框架
```

###文件作用：
 mock：配置假数据
 router: 配置页面路由
 src/permission: 页面权限控制
 components/global 全局组件文件夹（index.js中会自动加载global下的所有组件）
 .env.mock: 设置mock环境下，所要的全局属性（定义模拟数据）
 .env.debugger: 设置debugger环境下，所要的全局属性(用于局域网中调试。若后端是微服务，配合debugger.port.js。)
 .env.development: 设置development环境下，所要的全局属性（开发环境）
 .env.production: 设置production环境下，所要的全局属性（生产环境）

###配置项：
 .注释格式
   /** 2019/1/28
    * @Author: 刘宇琳
    * @Desc: 描述
    */
 .代码规则与风格：eslint+prettier

###请求
 .默认每次请求都会加载请求动画，若是某些接口不需要加载动画，在请求参数中添加isHideLoading，且设置为true
   request({
      url: '/management/maintainRecord/uploadMaintainPic/w/v1',
      method: 'post',
      data: { isHideLoading: true }
   })
 .若要单独编写上传文件的逻辑和请求，在请求参数中添加isFile
   request({
     url: '/management/maintainRecord/uploadMaintainPic/w/v1',
     method: 'post',
     isFile: true
   })

###路由
 .在router文件夹中，为每个模块单独创建一个文件夹。根据不同的业务模块进行拆分路由，在每个子模块中导出一个路由配置数组。
  在根 index.js中扫描所有的路由并自动加载

###组件封装
 .所有公共组件，用zv-包装
 .涉及到业务逻辑的组件，在封装的时候，通过mixin，将业务逻辑代码和基本组件代码区分

###优化
 .异步路由 { path: '/order', component: () => import('./views/order.vue') }
 .异步组件 export default { components: { HellowWorld: () => import('../components/HelloWorld.vue') } }
 .除非组件1.有预渲染需求；2.需要频繁切换显示状态，否则使用v-if代替v-show
 .引入 compression-webpack-plugin, vue.config.js中开起gzip，Nginx中开启gzip
 .npm run build --report 查看包体积
 .对于多次会用到的逻辑，使用mixin封装，例如：多个地方用到相同的请求
   userinfo-mixin.js:
    import * as api from '@/api/test'
    export default {
      methods: {
        getUserInfo() {
          api.test(data => {
            debugger
            alert(data)
          })
        }
      }
    }

###依赖
 .img-2  https://github.com/RevillWeb/img-2
 .vue-create-api  https://github.com/cube-ui/vue-create-api/blob/master/README_zh-CN.md
 .lozad  https://github.com/ApoorvSaxena/lozad.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
