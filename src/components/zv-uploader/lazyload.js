import Vue from 'vue'
import { Lazyload } from 'vant'

// options 为可选参数，无则不传
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})
