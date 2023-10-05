import { FC } from 'react'
import { IButton } from '../../../interfaces/atoms'
import { ButtonStyle } from './style'

export const ButtonComponent: FC<IButton> = ({
  title,
  backgorund,
  height,
  width,
  weight,
  color,
  ...rest
}) => (
  <ButtonStyle
    {...rest}
    backgorund={backgorund}
    height={height}
    weight={weight}
    width={width}
    color={color}
  >
    {title}
  </ButtonStyle>
)
