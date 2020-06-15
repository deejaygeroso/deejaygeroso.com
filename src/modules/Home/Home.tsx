import React, { FunctionComponent, ReactElement } from 'react'
import Projects from './Projects'
import { RouteComponentProps } from '@reach/router'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'
import Testimonials from './Testimonials/Testimonials'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
    </>
  )
}

export default Home
