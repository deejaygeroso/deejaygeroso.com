import {
  adally1,
  adally2,
  angela,
  aryen,
  chris,
  crypto1,
  crypto2,
  crypto3,
  databased,
  deejay,
  dejablog,
  denmark,
  dustin,
  erick,
  hazel,
  helpbert,
  jalil,
  jason,
  jonCesar,
  junski,
  justin,
  marcoPaps,
  meegle,
  monitoring,
  papaRods,
  portia,
  richard,
  sheryl,
  vanessa,
} from '../../../../common/images'
import { IProject } from './Projects'

const deejayGerosoLinkedIn = 'https://www.linkedin.com/in/deejaygeroso'
const memberDeejayGeroso = {
  image: deejay,
  linkedIn: deejayGerosoLinkedIn,
  name: 'Deejay Geroso',
  position: 'Lead Developer',
}
const memberVanessaFaithAbordo = {
  image: vanessa,
  linkedIn: 'https://www.linkedin.com/in/vanessa-faith-abordo-24a673131',
  name: 'Vanessa Faith Abordo',
  position: 'Back-end Developer',
}
const memberJunski = {
  image: junski,
  linkedIn: 'https://www.linkedin.com/in/casan-jr-mala-58b796a7',
  name: 'Casan Jr Mala',
  position: 'Senior Front-end Developer',
}

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
        linkedIn: null,
        name: 'Micah Uyeharam',
        position: 'Project Supervisor',
      },
      memberDeejayGeroso,
      {
        image: denmark,
        linkedIn: 'https://www.linkedin.com/in/denmark-tabiolo-b45839a9',
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
        image: dustin,
        linkedIn: 'https://www.linkedin.com/in/dustintwatkins',
        name: 'Dustin Watkins',
        position: 'Co-Founder and Head of Engineering',
      },
      {
        image: chris,
        linkedIn: 'https://www.linkedin.com/in/christophergbradshaw',
        name: 'Christopher Bradshaw',
        position: 'Front-end Team Lead',
      },
      {
        image: justin,
        linkedIn: 'https://www.linkedin.com/in/justin-lee-behnke-a9956b8a',
        name: 'Justin Lee Behnke',
        position: 'Founding Engineer',
      },
      memberDeejayGeroso,
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
        image: richard,
        linkedIn: 'https://www.linkedin.com/in/richardsalem',
        name: 'Richard Paul Salem',
        position: 'Project Owner',
      },
      memberDeejayGeroso,
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
        linkedIn: 'https://www.linkedin.com/in/faith-hall-3096584',
        name: 'Faith Hall',
        position: 'Senior Manager',
      },
      memberJunski,
      {
        image: papaRods,
        linkedIn: 'https://www.linkedin.com/in/roderick-gohetia',
        name: 'Roderick Gohetia',
        position: 'Senior Back-end Developer',
      },
      memberVanessaFaithAbordo,
      memberDeejayGeroso,
      {
        image: aryen,
        linkedIn: null,
        name: 'Aryen Jim Bejagan',
        position: 'Front-end Developer',
      },
      {
        image: jason,
        linkedIn: 'https://www.linkedin.com/in/jason-abella-b4837215a',
        name: 'Jason Abella',
        position: 'Front-end Developer',
      },
      {
        image: marcoPaps,
        linkedIn: 'https://www.linkedin.com/in/marcopaps',
        name: 'Marco Budiongan',
        position: 'DevOps Engineer',
      },
      {
        image: jonCesar,
        linkedIn: 'https://www.linkedin.com/in/jon-cesar-tagsip-1129ab15b',
        name: 'Jon Cesar Tagsip',
        position: 'Quality Assurance',
      },
      {
        image: hazel,
        linkedIn: null,
        name: 'Hazel Ko Lumactod',
        position: 'Quality Assurance',
      },
      {
        image: sheryl,
        linkedIn: 'https://www.linkedin.com/in/sheryl-picante-865089176',
        name: 'Sheryl Picante',
        position: 'Quality Assurance',
      },
      {
        image: portia,
        linkedIn: 'https://www.linkedin.com/in/portia-linao',
        name: 'Portia Linao',
        position: 'Marketing Specialist',
      },
      {
        image: angela,
        linkedIn: 'https://www.linkedin.com/in/angeladoloricon',
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
      memberDeejayGeroso,
      memberVanessaFaithAbordo,
      {
        image: null,
        linkedIn: null,
        name: 'John Crisostomo',
        position: 'Back-end Developer',
      },
      {
        image: erick,
        linkedIn: 'https://www.linkedin.com/in/john-erick-madduma-300083113',
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
    members: [memberJunski, memberVanessaFaithAbordo, memberDeejayGeroso],
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
        image: jalil,
        linkedIn: 'https://www.linkedin.com/in/jalil-laguindab',
        name: 'Jalil Laguindab',
        position: 'Full-stack Developer',
      },
      memberDeejayGeroso,
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
