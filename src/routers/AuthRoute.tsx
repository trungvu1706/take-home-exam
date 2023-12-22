import { Navigate, Outlet } from 'react-router-dom'
import { PATH_HOME_PAGE } from './routes'

interface AuthRouteProps {
  accessToken?: string
}

export const AuthRoute = ({ accessToken }: AuthRouteProps) => {
  return accessToken ? <Outlet /> : <Navigate to={PATH_HOME_PAGE} />
}
