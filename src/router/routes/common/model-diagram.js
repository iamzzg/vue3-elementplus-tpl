import { LAYOUT } from '@/router/constant'

const ModelDiagramRoute = {
  path: '/model-diagram',
  meta: {
    title: 'model-diagram'
  },
  component: LAYOUT,
  children: [
    {
      path: '',
      meta: {
        title: 'model-diagram'
      },
      component: () => import('@/views/model-diagram/index.vue')
    }
  ]
}
export default ModelDiagramRoute
