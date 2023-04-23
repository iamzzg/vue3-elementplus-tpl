import { LAYOUT } from '@/router/constant'

const CertificateRoute = {
  path: '/certificate',
  meta: {
    title: 'certificate'
  },
  component: LAYOUT,
  children: [
    {
      path: '',
      meta: {
        title: 'certificate'
      },
      component: () => import('@/views/certificate/index.vue')
    }
  ]
}
export default CertificateRoute
