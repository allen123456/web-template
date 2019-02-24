/* Layout */
import BaseLayout from '@/layouts/BaseLayout'
import SimpleLayout from '@/layouts/SimpleLayout'
export default [
  {
    path: '/',
    redirect: '/baseLayout',
    component: BaseLayout,
    children: [
      {
        path: '/baseLayout',
        name: 'BaseLayout',
        component: () => import('@/views/examples/index.vue'),
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
        component: () => import('@/views/examples/Detail.vue'),
        meta: { title: 'SimpleLayout' }
      }
    ]
  }
]
