export default [
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/errorPage/404')
  }
]
