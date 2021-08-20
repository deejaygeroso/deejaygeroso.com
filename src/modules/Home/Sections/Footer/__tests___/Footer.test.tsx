import { render, screen } from '@testing-library/react'
import Footer from '..'
import { ISocialMedia } from '../../../../../common/interfaces'
import React from 'react'
import data from '../../../../../data'
import '@testing-library/jest-dom' // Allows the use of additional matchers for testing components.

describe('Footer', () => {
  it('Should show title CONTACT', () => {
    render(<Footer />)

    expect(screen.getByText(/contact/i)).toHaveTextContent('CONTACT')
  })

  it('Should show all social media links of Deejay Geroso', () => {
    render(<Footer />)

    data.contacts.socialMedias.forEach((socialMedia: ISocialMedia): void => {
      expect(screen.getByTestId(socialMedia.id)).toHaveAttribute('href', socialMedia.link)
    })
  })

  it('Should show appVersion', () => {
    render(<Footer />)
    const appVersionText = `App Version: ${data.appVersion}`

    expect(screen.getByText(appVersionText)).toHaveTextContent(appVersionText)
  })
})
