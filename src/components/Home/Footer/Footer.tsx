import React, { FunctionComponent, ReactElement, useContext } from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { IAppContext, ISocialMedia } from '@/interfaces'

import { AppContext } from '@/context/useAppContext'

import './styles.css'

const Footer: FunctionComponent = (): ReactElement => {
  const data: IAppContext = useContext(AppContext)
  const { appVersion, contacts } = data

  const date = new Date()
  const year = date.getFullYear()
  const mailTo = (): void => {
    window.location.href = `mailto:${contacts.email}?subject=Subject&body=message%20goes%20here`
  }

  const renderSocialMediaIcon = (socialMediaLink: string): ReactElement => {
    switch (socialMediaLink) {
      case contacts.socialMedias[0].link: {
        return <FaFacebookSquare />
      }
      case contacts.socialMedias[1].link: {
        return <FaGithubSquare />
      }
      case contacts.socialMedias[2].link: {
        return <FaInstagramSquare />
      }
      case contacts.socialMedias[3].link: {
        return <FaLinkedin />
      }
      case contacts.socialMedias[4].link: {
        return <FaTwitterSquare />
      }
    }
    return <></>
  }

  return (
    <section id='footer'>
      <h1>CONTACT</h1>
      {contacts.email && (
        <div
          className='mail-to'
          onClick={mailTo}
        >
          <MdEmail />
          &nbsp;
          {contacts.email}
        </div>
      )}
      <div>
        {contacts.socialMedias.map(
          (socialMedia: ISocialMedia): ReactElement => (
            <a
              data-testid={socialMedia.id}
              href={socialMedia.link}
              key={socialMedia.id}
              rel='noopener noreferrer'
              target='_blank'
            >
              {renderSocialMediaIcon(socialMedia.link)}
            </a>
          ),
        )}
      </div>
      <div>
        <p>Powered by Amazon Elastic Compute Cloud and ReactJS @ {year}</p>
        <p>App Version: {appVersion}</p>
      </div>
    </section>
  )
}

export default Footer
