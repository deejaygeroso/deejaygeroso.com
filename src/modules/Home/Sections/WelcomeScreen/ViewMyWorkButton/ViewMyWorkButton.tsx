import React, { FunctionComponent, ReactElement } from 'react'
import './styles.css'

const ViewMyWorkButton: FunctionComponent = (): ReactElement => {
  return (
    <a href='#projects' className='view-my-work-button'>
      View My Work
    </a>
  )
}

export default ViewMyWorkButton
