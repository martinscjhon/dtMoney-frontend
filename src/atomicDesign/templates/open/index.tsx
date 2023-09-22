import { FC } from 'react'
import { Layout, PrincipalContainer } from './style'
import { ImageComponent } from '../../atoms/image'
import { Outlet } from 'react-router-dom'

export const OpenTemplate: FC = () => {
  return (
    <PrincipalContainer>
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
