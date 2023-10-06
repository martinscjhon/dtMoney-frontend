import { FC, useEffect, useState } from 'react'
import { handleIsAuthentication } from '../../../auth/isAuthentication'
import { Navigate } from 'react-router-dom'
import { PrincipalContainer } from './style'
import { Header } from '../../molecules/header'
import { GroupCardsResume } from '../../organisms/group-cards-resume'

export const HomeTemplate: FC = () => {
  // const { controlUser } = useControlUser()
  const [redirect, setRedirect] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')

  const handleAuthentication = () => {
    if (!handleIsAuthentication()) {
      setUrl('/')
    }

    setRedirect(true)
  }

  useEffect(() => {
    handleAuthentication()
  }, [])

  return (
    <>
      {redirect ? <Navigate to={url} /> : <></>}

      <PrincipalContainer>
        <Header />
        <GroupCardsResume />
      </PrincipalContainer>
    </>
  )
}
