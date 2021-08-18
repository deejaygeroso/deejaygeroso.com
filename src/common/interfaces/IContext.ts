import IContact from './IContact'
import IProject from './IProject'

interface IContext {
  appVersion: string
  contacts: IContact
  projects: IProject[]
}

export default IContext
