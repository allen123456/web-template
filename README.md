# 中联前端开发基础框架 | [风格指南](./doc/风格指南.md) | [css命名规范](./doc/css命名规范.md)

## 项目目录结构树：
```
 .
 ├── src
 │   ├── api
 │   │   └── test.js                api接口调用方法文件
 │   ├── assets
 │   │   ├── img                    公共图片存放文件
 │   │   └── styles                 公共样式存放文件
 │   ├── components
 │   │   ├── global                 公共全局组件存放文件
 │   │   ├── index.js               自动将global中的组件挂载到Vue上
 │   ├── icons
 │   │   ├── index.js               自动将svg文件夹中的svg图标引入项目
 │   │   └── svg                    存放用svg图标
 │   ├── lang
 │   │   ├── en-US                  英文文件存放目录
 │   │   └── zh-CN                  中文文件存放目录
 │   ├── layouts
 │   │   ├── BaseLayout             基础布局组件
 │   │   └── SimpleLayout           简单布局组件
 │   ├── main.js
 │   ├── mixins                     全局mixin存放文件夹
 │   │   └── emitter.js             自定义组件方法
 │   ├── mock
 │   │   ├── index.js
 │   │   └── test.js                mock数据模块
 │   ├── router
 │   │   └── index.js               自动加载router下的路由模块
 │   ├── store
 │   │   ├── getters.js
 │   │   ├── index.js
 │   │   └── modules                store模块
 │   ├── utils
 │   │   ├── assist.js              自定义组件方法
 │   │   ├── errorLog.js            全局捕获错误方法
 │   │   ├── bus.js                 中央事件总线bus
 │   │   ├── auth.js                token操作
 │   │   ├── validate.js            验证方法集合
 │   │   ├── index.js               一般工具方法
 │   │   ├── permission.js          全局路由权限控制
 │   │   └── request                封装网络请求
 │   └── views
 │       ├── Home.vue
 │       └── errorPage              404页面
 ├── vue.config.js
 ├── .env.mock                      设置mock环境下，所要的全局属性（定义模拟数据）
 ├── .env.debugger                  设置debugger环境下，所要的全局属性(用于局域网中调试。若后端是微服务，配合debugger.port.js。)
 ├── .env.development               设置development环境下，所要的全局属性（开发环境）
 └── .env.production                设置production环境下，所要的全局属性（生产环境）
```

## 一般书写规范
```
 .普通 JS 文件以小写字母命名，多个单词以下划线连接，例如 util.js、util_helper.js
 .按模块划分文件，每个文件一般都以index命名的文件作为入口页面
 .当前页面的组件处于同级，新建页面则新开文件夹,例如：
   -home
   --index.vue
   --List.vue
   -detail
   --index.vue
 .文件夹的命名，遵循 单驼峰 命名法
```

## 业务组件
```
 .对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理
  .只负责一块相对独立，稳定的功能
  .没有单独的路由配置
  .可能是纯静态的，也可能包含自己的 state，但不涉及vuex的数据流，仅受父组件传递的参数控制
  .封装第三方UI库组件是，方法和属性命名需与第三方UI组件保持一致
  .封装其他组件时，供父组件使用的函数名已 on 开头
  .组件文件命名遵循 Pascal 命名法，且组件名的组成最好是大于一个单词。例如 ReservationCard.vue
  .组件中尽量少使用ref，这会破坏组件的封装性
```

## 配置项：
```
 .注释格式
    1.方法注释：
    /**
     * @Date: 2019/1/28
     * @Author: 刘宇琳
     * @Desc: 描述
     */

     2.页面或组件 头部提示类注释：
     <!--公用组件：列表
     /**
     * @author 刘宇琳
     * @date 2019/2/18
     * @param dataSource：列表数据源
     * 用法：集成了无数据页面、上下拉刷新。参考examples/List.vue
     */
     -->

    3. 方法内逻辑、属性注释：
    // 这是具体逻辑代码注释

    4. css注释
    /* 这是 css 注释内容 */

  .代码规则与风格：eslint+prettier
  .移动端基于vw适配
  .使用sass编写样式,css风格遵循bem规范
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

## 插件
```
 .插件统一写在plugins文件夹中，index.js会自动引入到项目中去
```

## 路由
```
 .根据不同的业务模块进行拆分路由,在每个子模块中导出一个路由配置数组。
 .在router文件夹中，为每个模块单独创建一个文件夹。router/index.js中扫描所有的
   路由并自动加载(若新加的路由没有及时生效，需重新编译)
```

## 组件封装
```
 .所有公共组件，用zv-包装
 .涉及到业务逻辑的组件，在封装的时候，通过mixin，将业务逻辑代码和基本组件代码区分
 .可以抽取的布局组件，统一存放在layouts文件夹中
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
 .vue-create-api                   https://github.com/cube-ui/vue-create-api
 .crypto-js                        https://github.com/brix/crypto-js
 .element-ui                       https://github.com/ElemeFE/element
 .nprogress                        https://github.com/rstacruz/nprogress
 .js-cookie                        https://github.com/js-cookie/js-cookie
 .axios                            https://github.com/axios/axios
 .svgo                             https://github.com/svg/svgo
 .vue-skeleton-webpack-plugin      https://github.com/lavas-project/vue-skeleton-webpack-plugin
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
