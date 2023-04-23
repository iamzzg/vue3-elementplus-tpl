import { LAYOUT } from '@/router/constant'

const HomeRoute = {
  path: '/home',
  meta: {
    title: '首页'
  },
  component: LAYOUT,
  children: [
    {
      path: '',
      meta: {
        title: '首页'
      },
      component: () => import('@/views/home/index.vue')
    }
  ]
}
export default HomeRoute
