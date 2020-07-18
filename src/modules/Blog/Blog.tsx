import React, { FunctionComponent, ReactElement } from 'react'
import { Navigation } from '../../common/components'
import { RouteComponentProps } from '@reach/router'
import './styles.css'

const Blog: FunctionComponent<RouteComponentProps> = (): ReactElement => {
  return (
    <>
      <Navigation />
      <h1>My Blog</h1>
    </>
  )
}

export default Blog
