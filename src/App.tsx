import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Blog from './modules/Blog'
import Home from './modules/Home'
// import { Router } from '@reach/router'
import './common/styles/app.css'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
