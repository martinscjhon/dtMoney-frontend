import { FC, memo } from 'react'
import { Label } from './style'
import { ILabel } from '../../../interfaces/atoms'

export const LabelBase: FC<ILabel> = ({ htmlFor, title }) => {
  return <Label htmlFor={htmlFor}>{title}</Label>
}

export const LabelComponent = memo(
  LabelBase,
  (prevProps: { title: string }, nextProps: { title: string }) => {
    return Object.is(prevProps.title, nextProps.title)
  },
)
