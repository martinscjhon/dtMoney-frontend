import { FC, useEffect, useState } from 'react'
import { Layout, PrincipalContainer } from './style'
import { ImageComponent } from '../../atoms/image'
import { Navigate, Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { handleIsAuthentication } from '../../../auth/isAuthentication'

export const OpenTemplate: FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false)
  const [url, setUrl] = useState<string>('')

  const handleAuthentication = () => {
    if (handleIsAuthentication()) {
      setUrl('/home')
    } else {
      setUrl('/')
    }

    setRedirect(true)
  }

  useEffect(() => {
    handleAuthentication()
  }, [])

  return (
    <PrincipalContainer>
      {redirect ? <Navigate to={url} /> : <></>}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />

      <ImageComponent option={'logo-black'} height={'auto'} width={'9rem'} />
      <div className="ball top"></div>
      <div className="ball bottom"></div>
      <Layout>
        <ImageComponent option={'bg-home'} height={'80vh'} width={'auto'} />
        <Outlet />
      </Layout>
    </PrincipalContainer>
  )
}
