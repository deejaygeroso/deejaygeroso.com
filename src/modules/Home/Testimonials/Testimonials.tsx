import React, { FunctionComponent, ReactElement } from 'react'
import dustin from '../../../../public/assets/images/testimonials/dustin-watkins.png'
import vanessa from '../../../../public/assets/images/testimonials/vanessa-faith-abordo.png'
import './styles.css'

interface IProps {}

const Testimonials: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  return (
    <section id='testimonials'>
      <h1>Testimonials</h1>
      <div className='profile'>
        <img src={dustin} />
        <div>
          <h1>Dustin Watkins</h1>
          <p>Co-Founder and Head of Engineering of Databased</p>
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
        <img src={vanessa} />
        <div>
          <h1>Vanessa Faith Abordo</h1>
          <p>Web Developer (Previous Teammate @ Snapzio Inc.)</p>
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
