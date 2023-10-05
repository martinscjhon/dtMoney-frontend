import { ReactNode, createContext, useContext, useState } from 'react'

interface IProvider {
  children: ReactNode
}

const ControlDrawerContext = createContext({})

export function ControlDrawerProvider({ children }: IProvider) {
  const [controlDrawer, setControlDrawer] = useState<boolean>(true)

  return (
    <ControlDrawerContext.Provider value={{ controlDrawer, setControlDrawer }}>
      {children}
    </ControlDrawerContext.Provider>
  )
}

export const useControlDrawer: any = () => useContext(ControlDrawerContext)
