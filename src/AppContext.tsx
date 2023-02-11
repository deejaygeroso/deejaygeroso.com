import { Context, createContext } from 'react'

import { IAppContext } from '@/interfaces'

import data from './data'

const AppContext: Context<IAppContext> = createContext(data)

export default AppContext
