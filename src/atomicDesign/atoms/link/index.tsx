import { FC, memo } from 'react'
import { ContainerStyle } from './style'
import { ILink } from '../../../interfaces/atoms/ILink'
import { Link } from 'react-router-dom'

const LinkBase: FC<ILink> = ({ color, size, href, weight, title }) => {
  return (
    <ContainerStyle color={color} size={size} weight={weight}>
      <Link to={href}>{title}</Link>
    </ContainerStyle>
  )
}

export const LinkComponent = memo(
  LinkBase,
  (prevProps: { title: string }, nextProps: { title: string }) => {
    return Object.is(prevProps.title, nextProps.title)
  },
)
