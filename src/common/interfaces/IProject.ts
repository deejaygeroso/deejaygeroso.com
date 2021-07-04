import IDomain from './IDomain'
import IMember from './IMember'

interface IProject {
  date: string
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
