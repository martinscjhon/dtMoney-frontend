import { FC } from 'react'
import { Layout, PrincipalContainer } from './style'
import { ImageComponent } from '../../atoms/image'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const OpenTemplate: FC = () => {
  return (
    <PrincipalContainer>
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

      <ImageComponent option={'logo-black'} height={'auto'} width={'7rem'} />
      <div className="ball top"></div>
      <div className="ball bottom"></div>
      <Layout>
        <ImageComponent option={'bg-home'} height={'80vh'} width={'auto'} />
        <Outlet />
      </Layout>
    </PrincipalContainer>
  )
}
