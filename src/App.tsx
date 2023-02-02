import React, { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import appData from '@/data'

import '@/common/styles/app.css'

import { AppContext } from '@/context/useAppContext'

import Blog from '@/pages/Blog'
import Home from '@/pages/Home'

const App = (): ReactElement => {
  const router = createBrowserRouter([
    {
      element: (
        <AppContext.Provider value={appData}>
          <Home />
        </AppContext.Provider>
      ),
      path: '/',
    },
    {
      element: <Blog />,
      path: 'blog',
    },
  ])

  return <RouterProvider router={router} />
}

export default App
