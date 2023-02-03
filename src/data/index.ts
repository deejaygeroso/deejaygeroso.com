import { IContact } from '@/interfaces'

import appVersion from './appVersion'
import projects from './projects'
import testimonials from './testimonials'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const contacts: IContact = require('./contacts.json')

export default {
  appVersion,
  contacts,
  projects,
  testimonials,
}
