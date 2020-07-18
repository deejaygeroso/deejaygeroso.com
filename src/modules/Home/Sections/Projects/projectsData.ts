import {
  adally1,
  adally2,
  crypto1,
  crypto2,
  crypto3,
  databased,
  deejay,
  dejablog,
  denmark,
  helpbert,
  meegle,
  monitoring,
} from '../../../../common/images'
import { IProject } from './Projects'

const projects: IProject[] = [
  {
    description:
      'An application that runs real-time homepage and fullpage scan to find out if your webstie is ADA (Americans with Disabilities Act Standards for Accessible) compliant.',
    domains: [
      {
        name: 'adally.com',
        url: 'https://www.adally.com',
      },
    ],
    members: [
      {
        image: null,
        name: 'Micah Uyeharam',
        position: 'Project Supervisor',
      },
      {
        image: deejay,
        name: 'Deejay Geroso',
        position: 'Lead Developer',
      },
      {
        image: denmark,
        name: 'Denmark Tabiolo',
        position: 'ReactJS Developer',
      },
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
    description: `A CRM (Content Relationship Management System) that helps companies improve sales productivity by tracking progress based on actual data and gives a better perspective for companies on which effort provides the greatest return.`,
    domains: [
      {
        name: 'databased.com',
        url: 'https://www.databased.com',
      },
    ],
    members: [
      {
        image: null,
        name: 'Dustin Watkins',
        position: 'Co-Founder and Head of Engineering',
      },
      {
        image: null,
        name: 'Christopher Bradshaw',
        position: 'Front-end Team Lead',
      },
      {
        image: null,
        name: 'Justin Behnke',
        position: 'Founding Engineer',
      },
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Software Engineer',
      },
    ],
    name: 'Databased',
    photos: [
      {
        name: databased,
      },
    ],
    position: 'Full-stack Typescript Developer',
    technology: [],
  },
  {
    description:
      'A digital cryptocurrency tracker for managing user portfolios. It shows computation of valuation, profit/loss, buying & market price in Bitcoin, Etherium and in US Dollars, supply 24hour volume etc. App also has charts and graphs for historical data of cryptocurrencies.',
    domains: [],
    members: [
      {
        image: null,
        name: 'Richard Salem',
        position: 'Project Owner',
      },
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Software Engineer',
      },
    ],
    name: 'Crypto Asset Management',
    photos: [
      {
        name: crypto1,
      },
      {
        name: crypto2,
      },
      {
        name: crypto3,
      },
    ],
    position: 'Full-stack Javascript Developer',
    technology: ['ReactJS', 'Redux', 'NextJS', 'ExpressJS', 'MongoDB', 'CoinMarketCap API version 1'],
  },
  {
    description:
      'A system that helps business owners manage their own website, online social engagements all in one single application.',
    domains: [
      {
        name: 'meegle-ios',
        url: 'https://apps.apple.com/us/app/meegle/id1243305648#?platform=iphonem',
      },
      {
        name: 'meegle-android',
        url: 'https://play.google.com/store/apps/details?id=com.snapzio.meegle&hl=en',
      },
    ],
    members: [
      {
        image: null,
        name: 'Faith Hall',
        position: 'Senior Manager',
      },
      {
        image: null,
        name: 'Casan Jr Mala',
        position: 'Senior Front-end Developer',
      },
      {
        image: null,
        name: 'Roderick Gohetia',
        position: 'Senior Back-end Developer',
      },
      {
        image: null,
        name: 'Vanessa Faith Abordo',
        position: 'Back-end Developer',
      },
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Mobile Developer',
      },
      {
        image: null,
        name: 'Aryen Jim Bejagan',
        position: 'Front-end Developer',
      },
      {
        image: null,
        name: 'Jason Abella',
        position: 'Front-end Developer',
      },
      {
        image: null,
        name: 'Marco Budiongan',
        position: 'DevOps Engineer',
      },
      {
        image: null,
        name: 'Jon Cesar Tagsip',
        position: 'Quality Assurance',
      },
      {
        image: null,
        name: 'Hazel Ko Lumactod',
        position: 'Quality Assurance',
      },
      {
        image: null,
        name: 'Sheryl Picante',
        position: 'Quality Assurance',
      },
      {
        image: null,
        name: 'Portia Linao',
        position: 'Marketing Specialist',
      },
      {
        image: null,
        name: 'Angela Doloricon',
        position: 'Marketing Specialist',
      },
    ],
    name: 'Meegle',
    photos: [
      {
        name: meegle,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: [
      'React Native (ios & android)',
      'Redux-observable',
      'Feathers JS (Client)',
      'FacebookSDK',
      'GoogleSDK',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
      'OneSignalSDK (Notification Upgrade)',
    ],
  },
  {
    description: 'An application that monitors servers, domains and websites.',
    domains: [],
    members: [
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Mobile Developer',
      },
      {
        image: null,
        name: 'Vanessa Faith Abordo',
        position: 'Back-end Developer',
      },
      {
        image: null,
        name: 'John Crisostomo',
        position: 'Back-end Developer',
      },
      {
        image: null,
        name: 'John Erick Madduma',
        position: 'Front-end Developer',
      },
    ],
    name: 'Meegle Monitoring',
    photos: [
      {
        name: monitoring,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)'],
  },
  {
    description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
    domains: [],
    members: [
      {
        image: null,
        name: 'Casan Jr Mala',
        position: 'Full-stack Developer',
      },
      {
        image: null,
        name: 'Vanessa Faith Abordo',
        position: 'Back-end Developer',
      },
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Mobile Developer',
      },
    ],
    name: 'Helpbert',
    photos: [
      {
        name: helpbert,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: [
      'React Native (ios & android)',
      'Redux',
      'Feathers JS (Client)',
      'FirebaseSDK (Crashlytics & Cloud Messaging)',
    ],
  },
  {
    description: `An application that can create and manage the multiple blogs, posts and user comments.`,
    domains: [],
    members: [
      {
        image: null,
        name: 'Jalil Laguindab',
        position: 'Full-stack Developer',
      },
      {
        image: null,
        name: 'Deejay Geroso',
        position: 'Full-stack Developer',
      },
    ],
    name: 'Dejablog (CMS)',
    photos: [
      {
        name: dejablog,
      },
    ],
    position: 'Front-end Web Developer with semi Back-end Role',
    technology: ['ReactJS', 'MeteorJS', 'ExpressJS', 'MongoDB'],
  },
]

export default projects
