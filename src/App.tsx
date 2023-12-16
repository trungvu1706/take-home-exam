import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout'
import { publicRoutes } from './routers'
import './globalStyles.css'

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  )
}

export default App
