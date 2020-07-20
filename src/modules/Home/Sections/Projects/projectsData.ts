import { IMember, IProject } from './Projects'
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
  giovanni,
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

import {
  adally1WebP,
  adally2WebP,
  angelaWebP,
  aryenWebP,
  chrisWebP,
  crypto1WebP,
  crypto2WebP,
  crypto3WebP,
  databasedWebP,
  deejayWebP,
  dejablogWebP,
  denmarkWebP,
  dustinWebP,
  erickWebP,
  giovanniWebP,
  hazelWebP,
  helpbertWebP,
  jalilWebP,
  jasonWebP,
  jonCesarWebP,
  junskiWebP,
  justinWebP,
  marcoPapsWebP,
  meegleWebP,
  monitoringWebP,
  papaRodsWebP,
  portiaWebP,
  richardWebP,
  sherylWebP,
  vanessaWebP,
} from '../../../../common/images/webp'

const deejayGerosoLinkedIn = 'https://www.linkedin.com/in/deejaygeroso'
const memberDeejayGeroso = {
  image: deejay,
  imageWebP: deejayWebP,
  linkedIn: deejayGerosoLinkedIn,
  name: 'Deejay Geroso',
  position: '',
}
const memberVanessaFaithAbordo = {
  image: vanessa,
  imageWebP: vanessaWebP,
  linkedIn: 'https://www.linkedin.com/in/vanessa-faith-abordo-24a673131',
  name: 'Vanessa Faith Abordo',
  position: '',
}
const memberJunski = {
  image: junski,
  imageWebP: junskiWebP,
  linkedIn: 'https://www.linkedin.com/in/casan-jr-mala-58b796a7',
  name: 'Casan Jr Mala',
  position: '',
}
const setMemberPosition = (member: IMember, position: string): IMember => {
  return Object.assign({}, member, { position })
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
        imageWebP: null,
        linkedIn: null,
        name: 'Micah Uyeharam',
        position: 'Project Supervisor',
      },
      setMemberPosition(memberDeejayGeroso, 'Lead Developer'),
      {
        image: denmark,
        imageWebP: denmarkWebP,
        linkedIn: 'https://www.linkedin.com/in/denmark-tabiolo-b45839a9',
        name: 'Denmark Tabiolo',
        position: 'ReactJS Developer',
      },
    ],
    name: 'Adally',
    photos: [
      {
        name: adally1,
        webP: adally1WebP,
      },
      {
        name: adally2,
        webP: adally2WebP,
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
        imageWebP: dustinWebP,
        linkedIn: 'https://www.linkedin.com/in/dustintwatkins',
        name: 'Dustin Watkins',
        position: 'Co-Founder and Head of Engineering',
      },
      {
        image: chris,
        imageWebP: chrisWebP,
        linkedIn: 'https://www.linkedin.com/in/christophergbradshaw',
        name: 'Christopher Bradshaw',
        position: 'Front-end Team Lead',
      },
      {
        image: justin,
        imageWebP: justinWebP,
        linkedIn: 'https://www.linkedin.com/in/justin-lee-behnke-a9956b8a',
        name: 'Justin Lee Behnke',
        position: 'Founding Engineer',
      },
      setMemberPosition(memberDeejayGeroso, 'Full-stack Developer'),
    ],
    name: 'Databased',
    photos: [
      {
        name: databased,
        webP: databasedWebP,
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
        imageWebP: richardWebP,
        linkedIn: 'https://www.linkedin.com/in/richardsalem',
        name: 'Richard Paul Salem',
        position: 'Project Owner',
      },
      setMemberPosition(memberDeejayGeroso, 'Full-stack Javascript Developer'),
    ],
    name: 'Crypto Asset Management',
    photos: [
      {
        name: crypto1,
        webP: crypto1WebP,
      },
      {
        name: crypto2,
        webP: crypto2WebP,
      },
      {
        name: crypto3,
        webP: crypto3WebP,
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
        imageWebP: null,
        linkedIn: 'https://www.linkedin.com/in/faith-hall-3096584',
        name: 'Faith Hall',
        position: 'Senior Manager',
      },
      setMemberPosition(memberJunski, 'Senior Front-end Developer'),
      {
        image: papaRods,
        imageWebP: papaRodsWebP,
        linkedIn: 'https://www.linkedin.com/in/roderick-gohetia',
        name: 'Roderick Gohetia',
        position: 'Senior Back-end Developer',
      },
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      {
        image: giovanni,
        imageWebP: giovanniWebP,
        linkedIn: null,
        name: 'Giovanni Lobitos',
        position: 'Front-end Developer',
      },
      {
        image: aryen,
        imageWebP: aryenWebP,
        linkedIn: null,
        name: 'Aryen Jim Bejagan',
        position: 'Website Designer',
      },
      {
        image: jason,
        imageWebP: jasonWebP,
        linkedIn: 'https://www.linkedin.com/in/jason-abella-b4837215a',
        name: 'Jason Abella',
        position: 'Website Designer',
      },
      {
        image: marcoPaps,
        imageWebP: marcoPapsWebP,
        linkedIn: 'https://www.linkedin.com/in/marcopaps',
        name: 'Marco Budiongan',
        position: 'DevOps Engineer',
      },
      {
        image: jonCesar,
        imageWebP: jonCesarWebP,
        linkedIn: 'https://www.linkedin.com/in/jon-cesar-tagsip-1129ab15b',
        name: 'Jon Cesar Tagsip',
        position: 'Quality Assurance',
      },
      {
        image: hazel,
        imageWebP: hazelWebP,
        linkedIn: null,
        name: 'Hazel Ko Lumactod',
        position: 'Quality Assurance',
      },
      {
        image: sheryl,
        imageWebP: sherylWebP,
        linkedIn: 'https://www.linkedin.com/in/sheryl-picante-865089176',
        name: 'Sheryl Picante',
        position: 'Quality Assurance',
      },
      {
        image: portia,
        imageWebP: portiaWebP,
        linkedIn: 'https://www.linkedin.com/in/portia-linao',
        name: 'Portia Linao',
        position: 'Marketing Specialist',
      },
      {
        image: angela,
        imageWebP: angelaWebP,
        linkedIn: 'https://www.linkedin.com/in/angeladoloricon',
        name: 'Angela Doloricon',
        position: 'Marketing Specialist',
      },
    ],
    name: 'Meegle',
    photos: [
      {
        name: meegle,
        webP: meegleWebP,
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
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      {
        image: null,
        imageWebP: null,
        linkedIn: null,
        name: 'John Crisostomo',
        position: 'Back-end Developer',
      },
      {
        image: erick,
        imageWebP: erickWebP,
        linkedIn: 'https://www.linkedin.com/in/john-erick-madduma-300083113',
        name: 'John Erick Madduma',
        position: 'Front-end Developer',
      },
    ],
    name: 'Meegle Monitoring',
    photos: [
      {
        name: monitoring,
        webP: monitoringWebP,
      },
    ],
    position: 'Mobile Developer (ios & android)',
    technology: ['React Native (ios & android)', 'Redux', 'Feathers JS (Client)'],
  },
  {
    description: `An online support system used internally by our company which allows live chat and receive and reply to our client's emails and tickets.`,
    domains: [],
    members: [
      setMemberPosition(memberJunski, 'Full-stack Developer'),
      setMemberPosition(memberVanessaFaithAbordo, 'Back-end Developer'),
      setMemberPosition(memberDeejayGeroso, 'Mobile Developer'),
    ],
    name: 'Helpbert',
    photos: [
      {
        name: helpbert,
        webP: helpbertWebP,
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
        imageWebP: jalilWebP,
        linkedIn: 'https://www.linkedin.com/in/jalil-laguindab',
        name: 'Jalil Laguindab',
        position: 'Back-end Developer',
      },
      setMemberPosition(memberDeejayGeroso, 'Front-end Developer'),
    ],
    name: 'Dejablog (CMS)',
    photos: [
      {
        name: dejablog,
        webP: dejablogWebP,
      },
    ],
    position: 'Front-end Web Developer with semi Back-end Role',
    technology: ['ReactJS', 'MeteorJS', 'ExpressJS', 'MongoDB'],
  },
]

export default projects
