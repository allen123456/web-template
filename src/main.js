import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './icons'
import './utils/permission'
import './utils/errorLog'
import './components/index'
import './assets/styles/index.scss'
import './plugins'

// 通过 npm run mock 启用mock数据
if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}

Vue.config.productionTip = false

const app = new Vue({
  store,
  router,
  i18n,
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
