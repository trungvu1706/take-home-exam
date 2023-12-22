import { HomePage, NotFound } from '~/pages'
import { PATH_HOME_PAGE } from './routes'

export const publicRoutes = [
  {
    path: PATH_HOME_PAGE,
    component: HomePage
  },

  {
    path: '*',
    component: NotFound
  }
]
