import { FC } from 'react'
import { PrincipalContainer } from './style'
import { DrawerComponent } from '../../atoms/drawer'
import { DrawerRegisterCategorie } from '../content-drawer/drawer-register-categorie'
import { DrawerRegisterTransation } from '../content-drawer/drawer-register-transation'
import { DrawerRegisterMenu } from '../content-drawer/drawer-register-menu'
import { Icone } from '../../atoms/icone'
import { colors } from '../../../styles/colors'

export const ContainerHeaderActions: FC = () => {
  return (
    <PrincipalContainer>
      <DrawerComponent
        children={<DrawerRegisterCategorie />}
        iconOrTextOpenDrawer={'Nova Categorias'}
        buttonOpenWith={'9rem'}
        buttonOpenHeight={'2rem'}
        buttonOpenColor={colors.gray[300]}
        buttonOpenBackground={colors.basic._fff}
        titleDrawer={'Cadastrar categoria'}
        buttonOpenWeight={500}
        existButtonCloseDrawer
      />
      <DrawerComponent
        children={<DrawerRegisterTransation />}
        iconOrTextOpenDrawer={'Nova transação'}
        buttonOpenWith={'9rem'}
        buttonOpenHeight={'2rem'}
        buttonOpenColor={colors.basic._fff}
        buttonOpenBackground={colors.purple[500]}
        titleDrawer={'Cadastrar transação'}
        buttonOpenWeight={400}
        existButtonCloseDrawer
      />
      <DrawerComponent
        children={<DrawerRegisterMenu />}
        iconOrTextOpenDrawer={Icone.Menu}
        buttonOpenWith={''}
        buttonOpenHeight={''}
        buttonOpenColor={colors.basic._000}
        buttonOpenBackground={'transparent'}
        titleDrawer={'Meu perfil'}
        buttonOpenWeight={400}
      />
    </PrincipalContainer>
  )
}
