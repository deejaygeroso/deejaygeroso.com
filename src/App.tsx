import React, { ReactElement } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppContext from './AppContext'
import Blog from './modules/Blog'
import Home from './modules/Home'
import data from './data'
import './common/styles/app.css'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        <AppContext.Provider value={data}>
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
