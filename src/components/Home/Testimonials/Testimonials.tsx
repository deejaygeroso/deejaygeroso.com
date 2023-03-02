import React, { FunctionComponent, ReactElement, useContext } from 'react'

import { IAppContext, ITestimonial } from '@/interfaces'

import { AppContext } from '@/context/useAppContext'

import './styles.css'

const Testimonials: FunctionComponent = (): ReactElement => {
  const data: IAppContext = useContext(AppContext)
  const { testimonials } = data
  return (
    <section id='testimonials'>
      <h1>Testimonials</h1>
      {testimonials.map(
        (testimonial: ITestimonial, key: number): ReactElement => (
          <div
            className='profile'
            key={key}
          >
            <picture>
              <source
                srcSet={testimonial.photo.webp}
                type='image/webp'
              />
              <source
                srcSet={testimonial.photo.default}
                type='image/jpeg'
              />
              <img
                alt={testimonial.photo.webp}
                src={testimonial.photo.webp}
              />
            </picture>
            <div>
              <h1>{testimonial.name}</h1>
              <p className='profile-position'>{testimonial.position}</p>
              <p className='profile-date'>{testimonial.date}</p>
              {testimonial.comments.map(
                (comment: string, key: number): ReactElement => (
                  <p key={key}>{comment}</p>
                ),
              )}
              {testimonial.subComments && (
                <ul>
                  {testimonial.subComments.map(
                    (subComment: string, key: number): ReactElement => (
                      <li key={key}>{subComment}</li>
                    ),
                  )}
                </ul>
              )}
            </div>
          </div>
        ),
      )}
    </section>
  )
}

export default Testimonials
