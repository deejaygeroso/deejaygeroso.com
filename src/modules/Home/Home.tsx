import React, { FunctionComponent, ReactElement, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import ViewMyWorkButton from './ViewMyWorkButton'
import { executeTitleTypeAnimation } from './helpers'
import profilePicture from '../../../public/assets/images/profile.jpg'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  useEffect((): void => {
    executeTitleTypeAnimation()
  })

  return (
    <>
      <section id='main-section'>
        <div>
          <img id='profile-picture' src={profilePicture} />
          <p id='demo'></p>
          <h1 id='title1'></h1>
          <h1 id='title2'></h1>
          <ViewMyWorkButton />
        </div>
      </section>
      <section>
        <h1>My latest work</h1>
      </section>
    </>
  )
}

export default Home
