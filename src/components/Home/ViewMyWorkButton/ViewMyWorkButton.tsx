import React, { FunctionComponent, ReactElement } from 'react'

import './styles.css'

const ViewMyWorkButton: FunctionComponent = (): ReactElement => {
  const temporarilyAddSmoothScroll = (): void => {
    document.getElementsByTagName('HTML')[0].classList.add('smooth-scroll')
    setTimeout(() => {
      document.getElementsByTagName('HTML')[0].classList.remove('smooth-scroll')
    }, 600)
  }

  return (
    <a
      className='view-my-work-button'
      href='#projects'
      onClick={temporarilyAddSmoothScroll}>
      View My Work
    </a>
  )
}

export default ViewMyWorkButton
