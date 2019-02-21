import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './icons'
import './utils/permission'
import './utils/errorLog'
import './components/index'

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// 通过 npm run mock 启用mock数据
if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}

Vue.config.productionTip = false

const app = new Vue({
  components: {
    App
  },
  router,
  store,
  i18n,
  render: h => h(App)
})

window.mountApp = () => {
  app.$mount('#app')
}

if (process.env.NODE_ENV === 'production') {
  if (window.STYLE_READY) {
    window.mountApp()
  }
} else {
  window.mountApp()
}
