import React, { ReactElement } from 'react'
import Blog from './modules/Blog'
import Home from './modules/Home'
import { Router } from '@reach/router'
import './common/styles/app.css'

const App = (): ReactElement => {
  return (
    <Router>
      <Home path='/' component={Home} />
      <Blog path='/blog' component={Blog} />
    </Router>
  )
}

export default App
