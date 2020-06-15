import React, { FunctionComponent, ReactElement, useEffect } from 'react'
import Projects from './Projects'
import { RouteComponentProps } from '@reach/router'
import WelcomeScreen from './WelcomeScreen'
import { executeTitleTypeAnimation } from './helpers'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  useEffect((): void => {
    executeTitleTypeAnimation()
  })

  return (
    <>
      <WelcomeScreen />
      <Projects />
    </>
  )
}

export default Home
