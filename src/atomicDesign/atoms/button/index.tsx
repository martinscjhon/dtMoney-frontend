import { FC } from 'react'
import { IButton } from '../../../interfaces/atoms'
import { Button } from './style'

export const ButtonComponent: FC<IButton> = ({
  title,
  backgorund,
  height,
  width,
  weight,
  color,
  ...rest
}) => (
  <Button
    {...rest}
    backgorund={backgorund}
    height={height}
    weight={weight}
    width={width}
    color={color}
  >
    {title}
  </Button>
)
