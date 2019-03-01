/* Layout */
import BaseLayout from '@/layouts/BaseLayout'
import SimpleLayout from '@/layouts/SimpleLayout'
export default [
  {
    path: '/',
    component: () => import('@/views/examples/Login/index')
  },
  {
    path: '/baseLayout',
    component: BaseLayout,
    children: [
      {
        path: '/baseLayout',
        name: 'BaseLayout',
        component: () => import('@/views/examples/Home/index.vue'),
        meta: { title: 'BaseLayout' }
      }
    ]
  },
  {
    path: '/',
    component: SimpleLayout,
    children: [
      {
        path: '/simpleLayout',
        name: 'SimpleLayout',
        component: () => import('@/views/examples/Detail/index.vue'),
        meta: { title: 'SimpleLayout' }
      }
    ]
  }
]
