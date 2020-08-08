import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import React, { FunctionComponent, ReactElement } from 'react'
import { MdEmail } from 'react-icons/md'
import './styles.css'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require('../../../../../package.json').version

const Footer: FunctionComponent = (): ReactElement => {
  const date = new Date()
  const year = date.getFullYear()
  const email = 'hello@deejaygeroso.com'
  const mailTo = (): void => {
    window.location.href = `mailto:${email}?subject=Subject&body=message%20goes%20here`
  }
  return (
    <section id='footer'>
      <h1>CONTACT</h1>
      <div className='mail-to' onClick={mailTo}>
        <MdEmail />
        &nbsp;
        {email}
      </div>
      <div>
        <a href='https://www.facebook.com/deejaygeroso' target='_blank' rel='noopener noreferrer'>
          <FaFacebookSquare />
        </a>
        <a href='https://github.com/deejaygeroso' target='_blank' rel='noopener noreferrer'>
          <FaGithubSquare />
        </a>
        <a href='https://www.instagram.com/deejaygeroso' target='_blank' rel='noopener noreferrer'>
          <FaInstagramSquare />
        </a>
        <a href='https://www.linkedin.com/in/deejaygeroso/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://twitter.com/deejaygeroso' target='_blank' rel='noopener noreferrer'>
          <FaTwitterSquare />
        </a>
      </div>
      <div>
        <p>Powered by Google Kubernetes Engine and ReactJS @ {year}</p>
        <p>App Version: {version}</p>
      </div>
    </section>
  )
}

export default Footer
