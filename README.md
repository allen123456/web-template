# 中联前端开发基础框架（多页面应用） | [风格指南](./风格指南.md)

## 项目目录结构树：
```
 .
 ├── src
 │   ├── api
 │   │   └── test.js
 │   ├── assets
 │   │   ├── img
 │   │   └── logo.png
 │   ├── common                           多页面公共配置文件
 │   │   ├── index.js
 │   │   └── navigator.js                 多页面导航功能封装
 │   ├── components
 │   │   ├── global
 │   │   ├── index.js
 │   │   └── zv-skeleton
 │   ├── icons
 │   │   ├── index.js
 │   │   └── svg
 │   ├── mixins
 │   │   └── emitter.js
 │   ├── mock
 │   │   ├── index.js
 │   │   └── test.js
 │   ├── pages
 │   │   ├── index                        具体页面模块文件夹
 │   │   ├── page1                        具体页面模块文件夹
 │   │   └── page2                        具体页面模块文件夹
 │   └── utils
 │       ├── assist.js
 │       ├── errorLog.js
 │       ├── index.js
 │       └── request
 ├── vue.config.js
 └── 风格指南.md
```

## 业务组件：
```
 .对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理
 .只负责一块相对独立，稳定的功能
 .没有单独的路由配置
 .可能是纯静态的，也可能包含自己的 state，但不涉及vuex的数据流，仅受父组件传递的参数控制
```

## 配置项：
```
 .注释格式
   /** 2019/1/28
    * @Author: 刘宇琳
    * @Desc: 描述
    */

    <!--公用组件：列表
    /**
    * @author 刘宇琳
    * @date 2019/2/18
    * @param dataSource：列表数据源
    * 用法：集成了无数据页面、上下拉刷新。参考examples/List.vue
    */
    -->
 .代码规则与风格：eslint+prettier
```

## 请求
```
 .基于axios封装
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
```

## 路由
```
 .多页面应用，每个模块各自创建路由管理文件
```

## 组件封装
```
 .所有公共组件，用zv-包装
 .涉及到业务逻辑的组件，在封装的时候，通过mixin，将业务逻辑代码和基本组件代码区分
```

## 优化
```
 .开启gizp，配置cdn
 .首屏加入骨架屏
 .异步路由 { path: '/order', component: () => import('./views/order.vue') }
 .异步组件 export default { components: { HellowWorld: () => import('../components/HelloWorld.vue') } }
 .除非组件1.有预渲染需求；2.需要频繁切换显示状态，否则使用v-if代替v-show
 .对于多次会用到的逻辑，使用mixin封装，例如：多个地方用到相同的请求
 .使用svgo优化svg
```

## 依赖
```
 .vue-create-api  https://github.com/cube-ui/vue-create-api
 .crypto-js       https://github.com/brix/crypto-js
```

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
