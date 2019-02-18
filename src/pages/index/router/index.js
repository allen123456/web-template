import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let base = `${process.env.BASE_URL}` + ''

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    }
  ]
})
