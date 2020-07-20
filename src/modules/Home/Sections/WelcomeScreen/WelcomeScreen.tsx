import React, { FunctionComponent, ReactElement, useEffect } from 'react'
import ViewMyWorkButton from './ViewMyWorkButton'
import { deejay250x250 } from '../../../../common/images'
import { executeTitleTypeAnimation } from './helpers'
import './styles.css'

const WelcomeScreen: FunctionComponent = (): ReactElement => {
  useEffect((): void => {
    executeTitleTypeAnimation()
  }, [])

  return (
    <section id='main-section'>
      <div>
        <img id='profile-picture' src={deejay250x250} />
        <p id='demo'></p>
        <h1 id='title1'></h1>
        <h1 id='title2'></h1>
        <ViewMyWorkButton />
      </div>
    </section>
  )
}

export default WelcomeScreen
