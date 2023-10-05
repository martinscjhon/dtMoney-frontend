import { FC } from 'react'
import { ImageComponent } from '../../atoms/image'
import { Container, PrincipalContainer } from './style'
import { ContainerHeaderActions } from '../container-header-actions'

export const Header: FC = () => {
  return (
    <PrincipalContainer>
      <Container>
        <ImageComponent option={'logo-white'} height={''} width={''} />
        <ContainerHeaderActions />
      </Container>
    </PrincipalContainer>
  )
}
