export default [
  {
    path: '/button',
    name: 'button',
    component: () =>
      import(/* webpackChunkName: "button" */ '@/views/examples/Button.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () =>
      import(/* webpackChunkName: "tab" */ '@/views/examples/Tab.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () =>
      import(/* webpackChunkName: "form" */ '@/views/examples/Form.vue')
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () =>
      import(/* webpackChunkName: "uploader" */ '@/views/examples/Uploader.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/Dialog.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/Picker.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/Toast.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/Popup.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/List.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/* webpackChunkName: "dialog" */ '@/views/examples/Search.vue')
  }
]
