import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { getLocalstorage } from '../common/storage'

interface IProvider {
  children: ReactNode
}

const ControlUserContext = createContext({})

async function getInitialState() {
  const user = getLocalstorage('user')

  return user
}

export function ControlUserProvider({ children }: IProvider) {
  const [controlUser, setControlUser] = useState<any>(getInitialState)

  const handleUser = () => {
    const user: any = getLocalstorage('user')

    setControlUser(user)
  }

  useEffect(() => {
    handleUser()
  }, [controlUser])

  return (
    <ControlUserContext.Provider value={{ controlUser, setControlUser }}>
      {children}
    </ControlUserContext.Provider>
  )
}

export const useControlUser: any = () => useContext(ControlUserContext)
