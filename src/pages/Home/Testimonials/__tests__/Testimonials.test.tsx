import { render, screen } from '@testing-library/react'
import { ITestimonial } from '@/common/interfaces'
import React from 'react'
import Testimonials from '..'
import testimonials from '@/data/testimonials'
import '@testing-library/jest-dom' // Allows the use of additional matchers for testing components.

describe('Testimonials', () => {
  it('Should show the title Testimonials', () => {
    render(<Testimonials />)
    const title = 'Testimonials'

    expect(screen.getByText(title)).toHaveTextContent(title)
  })

  it('Should show all the persons name and info with testimonials', () => {
    render(<Testimonials />)

    testimonials.forEach((testimonial: ITestimonial): void => {
      expect(screen.getByText(testimonial.name)).toHaveTextContent(testimonial.name)
      expect(screen.getByText(testimonial.date)).toHaveTextContent(testimonial.date)
      expect(screen.getByText(testimonial.position)).toHaveTextContent(testimonial.position)
    })
  })
})
