import React, { FunctionComponent, ReactElement, useEffect } from 'react'
import Projects from './Projects'
import { RouteComponentProps } from '@reach/router'
import WelcomeScreen from './WelcomeScreen'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <WelcomeScreen />
      <Projects />
    </>
  )
}

export default Home
