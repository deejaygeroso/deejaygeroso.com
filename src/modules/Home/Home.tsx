import React, { Fragment, FunctionComponent, ReactElement } from 'react'
import { Navigation } from '../../common/components'
import { RouteComponentProps } from '@reach/router'
import profilePicture from '../../../public/assets/images/profile.jpg'
import './styles.css'

const Home: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <Fragment>
      <Navigation />
      <section id='main-section'>
        <img id='profile-picture' src={profilePicture} />
        <h1>Deejay Geroso</h1>
        <div>Software Engineer</div>
        <h1>One Screen, All Apps</h1>
      </section>
    </Fragment>
  )
}

export default Home
