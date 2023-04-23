import { LAYOUT } from '../constant'

const PAGE_NOT_FOUND_NAME = 'PageNotFound'

export const PageNotFoundRoute = {
  path: '/:path(.*)*',
  component: LAYOUT,
  name: PAGE_NOT_FOUND_NAME,
  meta: {
    title: '404'
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME + 'index',
      component: () => import('@/views/sys/error/index.vue'),
      meta: {
        title: '404'
      }
    }
  ]
}

export const RootRoute = {
  path: '/',
  name: 'Root',
  redirect: '/home',
  meta: {
    title: ''
  }
}

export default {
  PageNotFoundRoute,
  RootRoute
}
