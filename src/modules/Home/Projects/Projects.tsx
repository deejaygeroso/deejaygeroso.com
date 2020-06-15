import React, { FunctionComponent, ReactElement } from 'react'
import ScrollAnimation, { fadeInDirection } from '../ScrollAnimation/ScrollAnimation'
import adally from '../../../../public/assets/images/projects/adally/adally-1.png'
import crypto from '../../../../public/assets/images/projects/crypto/volume_overview.png'
import databased from '../../../../public/assets/images/projects/databased/databased.png'
import dejablog from '../../../../public/assets/images/projects/dejablog/dejablog.jpg'
import helpbert from '../../../../public/assets/images/projects/helpbert/helpbert.png'
import meegle from '../../../../public/assets/images/projects/meegle/meegle.png'
import monitoring from '../../../../public/assets/images/projects/monitoring/monitoring.png'
import './styles.css'

const Projects: FunctionComponent = (): ReactElement => {
  return (
    <section id='projects'>
      <h1>Here are the list of some of my work:</h1>
      <ScrollAnimation id='project-adally' fadeInDirection={fadeInDirection.right}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Adally</h1>
          <img className='card project-images' src={adally} />
          <div className='project-info'>
            <h2 className='project-title'>
              Adally
              <span>
                <a href='https://www.adally.com' target='_blank' rel='noopener noreferrer'>
                  adally.com
                </a>
              </span>
            </h2>
            <p>
              An application that runs real-time homepage and fullpage scan to find out if your webstie is ADA
              (Americans with Disabilities Act Standards for Accessible) compliant.
            </p>
            <p>
              Position: Acting Team Lead (Sprint Planning, Designing and implementing Application Architecture, Devops,
              Back-end, Front-end, Quality Assurance, UI/UX)
            </p>
            <p>
              Technology: <span className='warning'>Cannot disclose publicly!</span>
            </p>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-databased' fadeInDirection={fadeInDirection.left}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Databased</h1>
          <div className='project-info'>
            <h2 className='project-title'>
              Databased
              <span>
                <a href='https://www.databased.com' target='_blank' rel='noopener noreferrer'>
                  databased.com
                </a>
              </span>
            </h2>
            <p>
              {`A CRM (Content Relationship Management System) that helps companies improve sales productivity by tracking progress based on actual data and gives a better perspective for companies on which effort provides the greatest return.`}
            </p>
            <p>Position: Full-stack Javascript Developer</p>
            <p>
              Technology: <span className='warning'>Cannot disclose publicly!</span>
            </p>
          </div>
          <img className='card project-images' src={databased} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-crypto-asset-management' fadeInDirection={fadeInDirection.right}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Crypto Asset Management</h1>
          <img className='card project-images' src={crypto} />
          <div className='project-info'>
            <h2 className='project-title'>Crypto Asset Management</h2>
            <p>
              A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation,
              profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App
              also has charts and graphs for historical data of cryptocurrencies.
            </p>
            <p>Position: Full-stack Javascript Developer</p>
            <p>Technology:</p>
            <ul>
              <li>React JS</li>
              <li>Redux</li>
              <li>Next JS</li>
              <li>Express JS</li>
              <li>Mongo DB</li>
              <li>CoinMarketCap API version 1</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-meegle' fadeInDirection={fadeInDirection.left}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Meegle</h1>
          <div className='project-info'>
            <h2 className='project-title'>
              Meegle
              <span>
                <a
                  href='https://apps.apple.com/us/app/meegle/id1243305648#?platform=iphonem'
                  target='_blank'
                  rel='noopener noreferrer'>
                  meegle-ios
                </a>
                <a
                  href='https://play.google.com/store/apps/details?id=com.snapzio.meegle&hl=en'
                  target='_blank'
                  rel='noopener noreferrer'>
                  meegle-android
                </a>
              </span>
            </h2>
            <p>
              A system that helps business owners manage their own website, online social engagements all in one single
              application.
            </p>
            <p>Position: Mobile Developer (ios & android)</p>
            <p>Technology:</p>
            <ul>
              <li>React Native (ios & android)</li>
              <li>Redux-observable</li>
              <li>Feathers JS (Client)</li>
              <li>FacebookSDK</li>
              <li>GoogleSDK</li>
              <li>FirebaseSDK (Crashlytics & Cloud Messaging)</li>
              <li>OneSignalSDK (Notification Upgrade)</li>
            </ul>
          </div>
          <img className='card project-images' src={meegle} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-meegle-monitoring' fadeInDirection={fadeInDirection.right}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Meegle Monitoring</h1>
          <img className='card project-images' src={monitoring} />
          <div className='project-info'>
            <h2 className='project-title'>Meegle Monitoring</h2>
            <p>An application that monitors servers, domains and websites.</p>
            <p>Position: Mobile Developer (ios & android)</p>
            <p>Technology:</p>
            <ul>
              <li>React Native (ios & android)</li>
              <li>Redux</li>
              <li>Feathers JS (Client)</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-helpbert' fadeInDirection={fadeInDirection.left}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Helpbert</h1>
          <div className='project-info'>
            <h2 className='project-title'>Helpbert</h2>
            <p>
              {`An online support system used internally by our company which allows live chat and receive and reply to
            our client's emails and tickets.`}
            </p>
            <p>Position: Mobile Developer (ios & android)</p>
            <p>Technology:</p>
            <ul>
              <li>React Native (ios & android)</li>
              <li>Redux</li>
              <li>Feathers JS (Client)</li>
              <li>FirebaseSDK (Crashlytics & Cloud Messaging)</li>
            </ul>
          </div>
          <img className='card project-images' src={helpbert} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation id='project-dejablog' fadeInDirection={fadeInDirection.right}>
        <div className='project-container'>
          <h1 className='title-on-mobile'>Dejablog (CMS)</h1>
          <img className='card project-images' src={dejablog} />
          <div className='project-info'>
            <h2 className='project-title'>Dejablog (Content Management System)</h2>
            <p>An application that can create and manage the multiple blogs, posts and user comments.</p>
            <p>Position: Front-end Developer with semi Back-end Role</p>
            <p>Technology:</p>
            <ul>
              <li>React JS</li>
              <li>Meteor JS</li>
              <li>Express JS</li>
              <li>Mongo DB</li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default Projects
