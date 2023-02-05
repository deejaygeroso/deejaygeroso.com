import React, { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Blog from '@/pages/Blog'
import Home from '@/pages/Home'

import '@/styles/app.css'

const App = (): ReactElement => {
  const router = createBrowserRouter([
    {
      element: <Home />,
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
