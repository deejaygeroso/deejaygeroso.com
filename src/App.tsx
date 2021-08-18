import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Blog from './modules/Blog'
import Home from './modules/Home'
import AppContext from './AppContext'
import projects from './data/projects'
import './common/styles/app.css'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <AppContext.Provider value={projects}>
          <Route path='/'>
            <Home />
          </Route>
        </AppContext.Provider>
        <Route path='/blog'>
          <Blog />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
