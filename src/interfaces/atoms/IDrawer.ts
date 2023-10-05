import { ReactNode } from 'react'

export interface IDrawer {
  children: ReactNode
  iconOrTextOpenDrawer: ReactNode
  buttonOpenWith: string
  buttonOpenHeight: string
  buttonOpenColor: string
  buttonOpenBackground: string
  titleDrawer: string
  drawerWidth?: string
  buttonOpenWeight: number
}
