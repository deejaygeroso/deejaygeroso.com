import React, { ReactElement } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import BlogPage from '@/pages/BlogPage'
import HomePage from '@/pages/HomePage'

import '@/styles/app.css'

const App = (): ReactElement => {
  const router = createBrowserRouter([
    {
      element: <HomePage />,
      path: '/',
    },
    {
      element: <BlogPage />,
      path: 'blog',
    },
  ])

  return <RouterProvider router={router} />
}

export default App
