import React, { FunctionComponent, ReactElement } from 'react'

import Footer from '@/components/HomePage/Footer'
import Projects from '@/components/HomePage/Projects'
import Testimonials from '@/components/HomePage/Testimonials'
import WelcomeScreen from '@/components/HomePage/WelcomeScreen'
import data from '@/data'

import { AppContext } from '@/context/useAppContext'

import './styles.css'

const Home: FunctionComponent = (): ReactElement => {
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
