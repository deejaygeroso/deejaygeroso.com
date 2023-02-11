import { render, screen } from '@testing-library/react'
import React from 'react'

import { describe, expect, test } from 'vitest'

import BlogPage from './Blog'

describe('BlogPage test', () => {
  test('should show title all the time', () => {
    render(<BlogPage />)

    const title = 'Blog'
    expect(screen.getByText(title)).toHaveTextContent(title)
  })
})
