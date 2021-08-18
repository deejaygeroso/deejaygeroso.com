import { cleanup, render } from '@testing-library/react'
import Footer from '..'
import { ISocialMedia } from '../../../../../common/interfaces'
import React from 'react'
import data from '../../../../../data'
import '@testing-library/jest-dom' // Allows the use of toHaveAttribute methods in testing.

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Footer', () => {
  it('Should show all social media links of Deejay Geroso', () => {
    const { getByTestId } = render(<Footer />)

    data.contacts.socialMedias.forEach((socialMedia: ISocialMedia): void => {
      expect(getByTestId(socialMedia.id)).toHaveAttribute('href', socialMedia.link)
    })
  })
})
