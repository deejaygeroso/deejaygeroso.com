import React, { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppContext from './AppContext'
import Blog from './pages/Blog'
import Home from './pages/Home'
import data from './data'
import './common/styles/app.css'

const App = (): ReactElement => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <AppContext.Provider value={data}>
          <Home />
        </AppContext.Provider>
      ),
    },
    {
      path: 'blog',
      element: <Blog />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
