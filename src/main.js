import Vue from 'vue'
import 'normalize.css/normalize.css'
import CreateAPI from 'vue-create-api'
import Vant from 'vant'
import 'vant/lib/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './utils/permission'
import './utils/errorLog'

// 通过 npm run mock 启用mock数据
if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}

if (process.env.NODE_ENV !== 'production') {
  let VConsole = require('vconsole/dist/vconsole.min')
  new VConsole()
}

Vue.use(CreateAPI, {
  componentPrefix: 'zv-',
  apiPrefix: '$create-'
})

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
