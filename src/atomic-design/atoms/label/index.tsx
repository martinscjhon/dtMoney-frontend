import { FC, memo } from 'react'
import { LabelStyle } from './style'
import { ILabel } from '../../../interfaces/atoms'

const LabelBase: FC<ILabel> = ({ htmlFor, title }) => {
  return <LabelStyle htmlFor={htmlFor}>{title}</LabelStyle>
}

export const LabelComponent = memo(
  LabelBase,
  (prevProps: { title: string }, nextProps: { title: string }) => {
    return Object.is(prevProps.title, nextProps.title)
  },
)
