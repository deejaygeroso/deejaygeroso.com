import IDomain from './IDomain'
import IMember from './IMember'

interface IProject {
  description: string
  domains: IDomain[]
  members: IMember[]
  name: string
  photos: {
    jpg: string
    webP: string
  }[]
  position: string
  technology: string[]
}

export default IProject
