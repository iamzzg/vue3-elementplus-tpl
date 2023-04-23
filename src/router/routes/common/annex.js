import { LAYOUT } from '@/router/constant'

const AnnexRoute = {
  path: '/annex',
  meta: {
    title: 'annex'
  },
  component: LAYOUT,
  children: [
    {
      path: '',
      meta: {
        title: 'annex'
      },
      component: () => import('@/views/annex/index.vue')
    }
  ]
}
export default AnnexRoute
