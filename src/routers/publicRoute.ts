import { HomePage, NotFound, SecondPage } from '~/pages'

export const publicRoutes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/second-page',
    component: SecondPage
  },
  {
    path: '*',
    component: NotFound
  }
]
