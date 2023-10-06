import { FC } from 'react'
import { PrincipalContainer } from './style'
import { CardResume } from '../../molecules/card-resume'

export const GroupCardsResume: FC = () => {
  return (
    <PrincipalContainer>
      <CardResume />
      <CardResume />
      <CardResume />
    </PrincipalContainer>
  )
}
