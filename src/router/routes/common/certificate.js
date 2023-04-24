import { LAYOUT } from '@/router/constant'

const CertificateRoute = {
  name: 'CertificateLayout',
  path: '/certificate',
  meta: {
    title: 'certificate'
  },
  component: LAYOUT,
  children: [
    {
      name: 'Certificate',
      path: '',
      meta: {
        title: 'certificate',
        cache: true
      },
      component: () => import('@/views/certificate/index.vue')
    }
  ]
}
export default CertificateRoute
