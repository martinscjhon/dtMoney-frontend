import { FC } from 'react'
import { Title } from './style'
import { ITitle } from '../../../interfaces/atoms'

export const TitleComponent: FC<ITitle> = ({ title, size, color, weight }) => {
  return (
    <Title color={color} size={size} weight={weight}>
      {title}
    </Title>
  )
}
