export default [
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '@/views/examples/ButtonPage.vue')
  }
]
