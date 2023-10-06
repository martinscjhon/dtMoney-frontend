import { FC } from 'react'
import { PrincipalContainer } from './style'
import { Icone } from '../../atoms/icone'
import { formatMoney } from '../../../helpers/format-money'

export const CardResume: FC = () => {
  return (
    <PrincipalContainer>
      <div className="title">
        <span>Entradas</span>
        {Icone.ArrowDown}
      </div>

      <span className="currency">{formatMoney(300)}</span>
    </PrincipalContainer>
  )
}
