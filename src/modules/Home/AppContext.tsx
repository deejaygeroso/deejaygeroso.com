import { IProject } from '../../common/interfaces'
import { createContext } from 'react'
import projects from '../../data/projects'

const AppContext: React.Context<IProject[]> = createContext(projects)

export default AppContext
