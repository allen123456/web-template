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

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
