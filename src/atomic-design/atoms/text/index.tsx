import { FC, memo } from 'react'
import { IText } from '../../../interfaces/atoms'
import { TextStyle } from './style'

const TextBase: FC<IText> = ({ color, size, title, weight }) => {
  return (
    <TextStyle color={color} size={size} weight={weight}>
      {title}
    </TextStyle>
  )
}

export const TextComponent = memo(
  TextBase,
  (prevProps: { title: string }, nextProps: { title: string }) => {
    return Object.is(prevProps.title, nextProps.title)
  },
)
