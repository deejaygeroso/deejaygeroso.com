import IContact from './IContact'
import IProject from './IProject'
import ITestimonial from './ITestimonial'

interface IAppContext {
  appVersion: string
  contacts: IContact
  projects: IProject[]
  testimonials: ITestimonial[]
}

export default IAppContext
