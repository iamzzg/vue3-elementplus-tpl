import { LAYOUT } from '@/router/constant'

const AnnexRoute = {
  name: 'AnnexLayout',
  path: '/annex',
  meta: {
    title: 'annex'
  },
  component: LAYOUT,
  children: [
    {
      name: 'Annex',
      path: '',
      meta: {
        title: 'annex',
        cache: true
      },
      component: () => import('@/views/annex/index.vue')
    }
  ]
}
export default AnnexRoute
