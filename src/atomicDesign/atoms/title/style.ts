import styled from 'styled-components'

export interface ITitle {
  size: string
  color: string
  weight: number
}

export const Title = styled.h1<ITitle>`
  color: ${(props) => props.color};
  font: ${(props) => props.weight} ${(props) => props.size} var(--font);
`
