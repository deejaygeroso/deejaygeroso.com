import { render, screen } from '@testing-library/react'
import React from 'react'
import WelcomeScreen from '..'
import '@testing-library/jest-dom' // Allows the use of additional matchers for testing components.

describe('Welcome Screen', () => {
  it("Should show Author's full name and occupation not more than 5 seconds upon loading the page", async () => {
    render(<WelcomeScreen />)

    await new Promise(r => setTimeout(r, 1000)) // wait for 1 second
    const firstTitle = `Hello, I'm`
    expect(screen.getByText(firstTitle)).toHaveTextContent(firstTitle)

    await new Promise(r => setTimeout(r, 2000)) // wait for additional 2 seconds
    const authorName = 'Deejay Geroso'
    expect(screen.getByText(authorName)).toHaveTextContent(authorName)

    await new Promise(r => setTimeout(r, 1000)) // finally, wait for another 1 second
    const secondTitle = `I'm a Software Engineer`
    expect(screen.getByText(secondTitle)).toHaveTextContent(secondTitle)
  })

  // This test covers ViewMyWorkButton Component
  it('Should show a button that shows the user a list of author`s projects', () => {
    render(<WelcomeScreen />)

    const viewMyWorkTitle = 'View My Work'
    const viewMyWorkButton = screen.getByText(viewMyWorkTitle)
    expect(viewMyWorkButton).toHaveTextContent(viewMyWorkTitle)
    expect(viewMyWorkButton).toHaveAttribute('href', '#projects')
  })
})
