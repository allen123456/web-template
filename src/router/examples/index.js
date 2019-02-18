export default [
  {
    path: '/button',
    name: 'button',
    component: () => import('@/views/examples/Button.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import('@/views/examples/Tab.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/examples/Form.vue')
  },
  {
    path: '/uploader',
    name: 'uploader',
    component: () => import('@/views/examples/Uploader.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/examples/Dialog.vue')
  },
  {
    path: '/picker',
    name: 'picker',
    component: () => import('@/views/examples/Picker.vue')
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('@/views/examples/Toast.vue')
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('@/views/examples/Popup.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/examples/List.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/examples/Search.vue')
  },
  {
    path: '/svg',
    name: 'svg',
    component: () => import('@/views/examples/SvgPage.vue')
  }
]
