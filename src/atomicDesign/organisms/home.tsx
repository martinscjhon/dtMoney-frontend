import { FC } from 'react'
import { useControlUser } from '../../context/userContext'

export const HomeOrganismo: FC = () => {
  const { controlUser } = useControlUser()

  return <span>{controlUser?.Nome}</span>
}
