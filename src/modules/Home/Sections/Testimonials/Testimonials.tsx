import React, { FunctionComponent, ReactElement } from 'react'
import { denmark250x250, dustin250x250, saraJavan250x250, vanessa250x250 } from '../../../../common/images'
import {
  denmark250x250WebP,
  dustin250x250WebP,
  saraJavan250x250WebP,
  vanessa250x250WebP,
} from '../../../../common/images/webp'
import './styles.css'

const Testimonials: FunctionComponent = (): ReactElement => {
  return (
    <section id='testimonials'>
      <h1>Testimonials</h1>
      <div className='profile'>
        <picture>
          <source srcSet={saraJavan250x250WebP} type='image/webp' />
          <source srcSet={saraJavan250x250} type='image/jpeg' />
          <img alt={saraJavan250x250WebP} src={saraJavan250x250WebP} />
        </picture>
        <div>
          <h1>Sara Javan</h1>
          <p className='profile-position'>Senior UI UX Designer @ Clinic To Cloud</p>
          <p className='profile-date'>January 31, 2021</p>
          <p>
            {`Deejay is one of the most hardworking and passionate developers I've ever worked with. His communication skills are his strengths.`}
          </p>
          <p>
            {`I have always found him easy to work with. He always takes his time to listen to ideas and requirements and help to come up with a practical solution in collaboration with the team.`}
          </p>
          <p>{`We were absolutely fortunate to have him on the team.`}</p>
        </div>
      </div>
      <div className='profile'>
        <picture>
          <source srcSet={denmark250x250WebP} type='image/webp' />
          <source srcSet={denmark250x250} type='image/jpeg' />
          <img alt={denmark250x250WebP} src={denmark250x250WebP} />
        </picture>
        <div>
          <h1>Denmark Tabiolo</h1>
          <p className='profile-position'>ReactJS Developer @ Adally</p>
          <p className='profile-date'>June 29, 2020</p>
          <p>
            {`Based on my experience as a developer, Deejay was the best teammate that I had ever worked with. He is
            really knowledgeable and passionate with his craft. He is a hardworking person and a good leader.`}
          </p>
          <p>
            {`He's
            pretty much flexible that he can do Frontend Development, Backend Development, Database Management and even
            Dev Ops with ease.`}
          </p>
          <p>
            {`As a leader, he is also considerate and open to fresh ideas giving his teammates the
            opportunity to shine. No doubt, I highly recommend this guy.`}
          </p>
        </div>
      </div>
      <div className='profile'>
        <picture>
          <source srcSet={dustin250x250WebP} type='image/webp' />
          <source srcSet={dustin250x250} type='image/jpeg' />
          <img alt={dustin250x250WebP} src={dustin250x250WebP} />
        </picture>
        <div>
          <h1>Dustin Watkins</h1>
          <p className='profile-position'>Co-Founder and Head of Engineering of Databased</p>
          <p className='profile-date'>January 4, 2020</p>
          <p>Having worked with Deejay for almost a year, I learned a few things about him:</p>
          <ul>
            <li>He is a hard worker</li>
            <li>He is a doer, not a complainer</li>
            <li>
              He takes initiative I also appreciated his sincere effort in getting to know the team members personally
              as a remote developer. His warm personality made the whole remote experience much better.
            </li>
          </ul>
        </div>
      </div>
      <div className='profile'>
        <picture>
          <source srcSet={vanessa250x250WebP} type='image/webp' />
          <source srcSet={vanessa250x250} type='image/jpeg' />
          <img alt={vanessa250x250WebP} src={vanessa250x250WebP} />
        </picture>
        <div>
          <h1>Vanessa Faith Abordo</h1>
          <p className='profile-position'>Software Engineer @ Snapzio Inc.</p>
          <p className='profile-date'>March 2, 2019</p>
          <p>
            Deejay is a proficient React Native developer and a great team player. He is knowledgeable not only on
            frontend, but on backend and devops roles as well. He can do full stack development but more focus on
            mobile.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
