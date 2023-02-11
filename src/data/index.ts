import { IContact } from '@/interfaces'

import appVersion from './appVersion'
import contacts from './contacts.json'
import projects from './projects'
import testimonials from './testimonials'

export default {
  appVersion,
  contacts: contacts as IContact,
  projects,
  testimonials,
}
