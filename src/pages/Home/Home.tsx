import React, { FunctionComponent, ReactElement } from 'react'
import Footer from './Footer'
import Projects from './Projects'
import Testimonials from './Testimonials'
import WelcomeScreen from './WelcomeScreen'
import { RouteComponentProps } from '@reach/router'
import './styles.css'
import Example from '@/common/components/Example'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <Example/>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
