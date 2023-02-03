import { Context, createContext, useContext } from 'react'

import data from '@/data'
import { IAppContext } from '@/interfaces'

export const AppContext: Context<IAppContext> = createContext(data)

const useAppContext = (): IAppContext => {
  const data: IAppContext = useContext(AppContext)

  return data
}

export default useAppContext
