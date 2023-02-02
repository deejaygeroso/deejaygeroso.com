import React, { FunctionComponent, ReactElement } from 'react'

import AppContext from '@/AppContext'
import data from '@/data'
import { RouteComponentProps } from '@reach/router'

import Footer from './Footer'
import Projects from './Projects'
import Testimonials from './Testimonials'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <AppContext.Provider value={data}>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </AppContext.Provider>
  )
}

export default Home
