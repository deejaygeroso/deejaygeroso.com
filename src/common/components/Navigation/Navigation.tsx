import React, { ReactElement } from 'react'
import { Link } from '@reach/router'
import './styles.css'

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
