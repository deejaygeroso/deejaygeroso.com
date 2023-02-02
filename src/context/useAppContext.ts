import { Context, createContext, useContext } from 'react'

import data from '@/data'

import { IContext } from '@/common/interfaces'

export const AppContext: Context<IContext> = createContext(data)

const useAppContext = (): IContext => {
  const data: IContext = useContext(AppContext)

  return data
}

export default useAppContext
