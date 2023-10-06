import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { FC } from 'react'
import { PrincipalContainer } from './style'
import { IDrawer } from '../../../interfaces/atoms'
import { ButtonComponent } from '../button'
import { useControlDrawer } from '../../../context/drawer-context'
import { Icone } from '../icone'
import { colors } from '../../../styles/colors'

const DrawerComponent: FC<IDrawer> = ({
  buttonOpenBackground,
  buttonOpenColor,
  buttonOpenHeight,
  buttonOpenWith,
  children,
  drawerWidth = '350px',
  iconOrTextOpenDrawer,
  buttonOpenWeight,
  titleDrawer,
  existButtonCloseDrawer,
}) => {
  const { controlDrawer, setControlDrawer } = useControlDrawer()
  const [state, setState] = React.useState({
    right: false,
  })

  const handleClose = () => {
    setState({
      ...state,
      right: false,
    })
  }

  const handleOpen = () => {
    setControlDrawer(true)
    setState({
      ...state,
      right: true,
    })
  }

  React.useEffect(() => {
    if (!controlDrawer) {
      handleClose()
    }
  }, [controlDrawer])

  const content = () => (
    <PrincipalContainer childrenWidth={drawerWidth}>
      <Box className="box-principal" role="presentation">
        <div className="header-drawer">
          <span>{titleDrawer}</span>
          <ButtonComponent
            backgorund="transparent"
            title={Icone.Close}
            color={''}
            width={'auto'}
            height={'auto'}
            weight={0}
            onClick={handleClose}
          />
        </div>
        <div className="content">
          {children}

          {existButtonCloseDrawer && (
            <ButtonComponent
              backgorund={colors.purple[400]}
              title={'Fechar'}
              color={colors.basic._fff}
              width={'100%'}
              height={'2.3rem'}
              weight={600}
              onClick={handleClose}
            />
          )}
        </div>
      </Box>
    </PrincipalContainer>
  )

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <ButtonComponent
            backgorund={buttonOpenBackground}
            title={iconOrTextOpenDrawer}
            color={buttonOpenColor}
            width={buttonOpenWith}
            height={buttonOpenHeight}
            onClick={handleOpen}
            weight={buttonOpenWeight}
          />
          <Drawer anchor={anchor} open={state[anchor]} onClose={handleClose}>
            {content()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export { DrawerComponent }
