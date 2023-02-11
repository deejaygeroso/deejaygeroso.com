import React, { FunctionComponent, ReactElement } from 'react'

import data from '@/data'

import Footer from '@/components/Home/Footer'
import Projects from '@/components/Home/Projects'
import Testimonials from '@/components/Home/Testimonials'
import WelcomeScreen from '@/components/Home/WelcomeScreen'

import { AppContext } from '@/context/useAppContext'

import './styles.css'

const HomePage: FunctionComponent = (): ReactElement => {
  return (
    <AppContext.Provider value={data}>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </AppContext.Provider>
  )
}

export default HomePage
