import React, { FunctionComponent, ReactElement } from 'react'
import Projects from './Projects'
import { RouteComponentProps } from '@reach/router'
import WelcomeScreen from './WelcomeScreen'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'
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
