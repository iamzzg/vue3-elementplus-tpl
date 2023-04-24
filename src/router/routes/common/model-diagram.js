import { LAYOUT } from '@/router/constant'

const ModelDiagramRoute = {
  name: 'ModelDiagramLayout',
  path: '/model-diagram',
  meta: {
    title: 'model-diagram'
  },
  component: LAYOUT,
  children: [
    {
      name: 'ModelDiagram',
      path: '',
      meta: {
        title: 'model-diagram',
        cache: true // 需要缓存
      },
      component: () => import('@/views/model-diagram/index.vue')
    }
  ]
}
export default ModelDiagramRoute
