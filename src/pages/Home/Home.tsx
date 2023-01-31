import React, { FunctionComponent, ReactElement } from 'react'
import Footer from './Footer'
import Projects from './Projects'
import { RouteComponentProps } from '@reach/router'
import Testimonials from './Testimonials'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
