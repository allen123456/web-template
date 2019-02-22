import Vue from 'vue'
import 'normalize.css/normalize.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './utils/permission'
import './utils/errorLog'
import './utils/solution'
import './components/index'

// 通过 npm run mock 启用mock数据
if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}

if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole/dist/vconsole.min')
  new VConsole()
}

Vue.use(Vant)

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  render: h => h(App)
})

/** 2019/2/22
 * @Author: 刘宇琳
 * @Desc: 骨架屏优化。如果 JS 晚于 CSS 加载完成，那直接执行渲染
 */
if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    app.$mount('#app')
  }
} else {
  app.$mount('#app')
}
