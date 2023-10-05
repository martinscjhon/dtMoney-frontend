import { FC } from 'react'
import { TitleStyle } from './style'
import { ITitle } from '../../../interfaces/atoms'

export const TitleComponent: FC<ITitle> = ({ title, size, color, weight }) => {
  return (
    <TitleStyle color={color} size={size} weight={weight}>
      {title}
    </TitleStyle>
  )
}
