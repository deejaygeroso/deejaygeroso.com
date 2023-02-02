import { Context, createContext } from 'react'

import { IContext } from './common/interfaces'
import data from './data'

const AppContext: Context<IContext> = createContext(data)

export default AppContext
