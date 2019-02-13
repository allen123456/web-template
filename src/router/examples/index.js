export default [
  {
    path: '/button',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '@/views/examples/Button.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: "tab" */ '@/views/examples/Tab.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '@/views/examples/Form.vue')
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import(/* webpackChunkName: "uploader" */ '@/views/examples/Uploader.vue')
  }
]
