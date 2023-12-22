import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout'
import { AuthRoute, privateRoutes, publicRoutes } from './routers'

import './globalStyles.css'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const authContext = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            return (
              <Route
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
                key={index}
              />
            )
          })}
        </Route>
        <Route element={<AuthRoute accessToken={authContext.user?.accessToken} />}>
          {privateRoutes.map((route, index) => {
            const Page = route.component
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            )
          })}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
