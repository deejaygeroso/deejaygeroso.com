import { IProject } from './Projects'
import { adally1, adally2, crypto, databased, dejablog, helpbert, meegle, monitoring } from '../../../../common/images'

const projects: IProject[] = [
  {
    description:
      'An application that runs real-time homepage and fullpage scan to find out if your webstie is ADA (Americans with Disabilities Act Standards for Accessible) compliant.',
    domains: [
      {
        name: 'adally.com',
        url: 'https://www.adally.com',
      }
    ],
    name: 'Adally',
    photos: [
      {
        name: adally1,
      },
      {
        name: adally2,
      },
    ],
    position:
      'Lead Developer (Sprint Planning, Designing and implementing Application Architecture, Devops, Back-end, Front-end, Quality Assurance and UI/UX)',
    technology: [],
  },
  {
    description:
      `A CRM (Content Relationship Management System) that helps companies improve sales productivity by tracking progress based on actual data and gives a better perspective for companies on which effort provides the greatest return.`,
    domains: [
      {
        name: 'databased.com',
        url: 'https://www.databased.com',
      }
    ],
    name: 'Databased',
    photos: [
      {
        name: databased,
      },
    ],
    position:
      'Full-stack Javascript Developer',
    technology: [],
  },
  {
    description: 'A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation, profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App also has charts and graphs for historical data of cryptocurrencies.',
    domains: [],
    name: 'Crypto Asset Management',
    photos: [
      {
        name: crypto,
      },
    ],
    position:
      'Full-stack Javascript Developer',
    technology: ['ReactJS', 'Redux', 'NextJS', 'ExpressJS', 'MongoDB', 'CoinMarketCap API version 1'],
  },
  {
    description: 'A system that helps business owners manage their own website, online social engagements all in one single application.',
    domains: [
      {
        name: 'meegle-ios',
        url: 'https://apps.apple.com/us/app/meegle/id1243305648#?platform=iphonem',
      },
      {
        name: 'meegle-android',
        url: 'https://play.google.com/store/apps/details?id=com.snapzio.meegle&hl=en',
      }
    ],
    name: 'Meegle',
    photos: [
      {
        name: meegle,
      },
    ],
    position:
      'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux-observable', 'Feathers JS (Client)', 'FacebookSDK', 'GoogleSDK', 'FirebaseSDK (Crashlytics & Cloud Messaging)', 'OneSignalSDK (Notification Upgrade)'],
  },
  {
    description: 'An application that monitors servers, domains and websites.',
    domains: [],
    name: 'Meegle Monitoring',
    photos: [
      {
        name: monitoring,
      },
    ],
    position:
      'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)'],
  },
  {
    description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
    domains: [],
    name: 'Helpbert',
    photos: [
      {
        name: helpbert,
      },
    ],
    position:
      'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)', 'FirebaseSDK (Crashlytics & Cloud Messaging)'],
  },
  {
    description: `An application that can create and manage the multiple blogs, posts and user comments.`,
    domains: [],
    name: 'Dejablog (CMS)',
    photos: [
      {
        name: dejablog,
      },
    ],
    position:
      'Front-end Web Developer with semi Back-end Role',
    technology: ['ReactJS', 'MeteorJS', 'ExpressJS', 'MongoDB'],
  },
]

export default projects
