import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { IInfoUser } from '../interfaces/services'
import { handleUser } from '../services/handles'

interface IProvider {
  children: ReactNode
}

const ControlUserContext = createContext({})

async function getInitialState() {
  await handleUser.info().then((res: IInfoUser) => {
    return res
  })
}

export function ControlUserProvider({ children }: IProvider) {
  const [controlUser, setControlUser] = useState<any>(getInitialState)

  useEffect(() => {
    if (!controlUser) {
      getInitialState()
    }
  }, [controlUser])

  return (
    <ControlUserContext.Provider value={{ controlUser, setControlUser }}>
      {children}
    </ControlUserContext.Provider>
  )
}

export const useControlUser: any = () => useContext(ControlUserContext)
