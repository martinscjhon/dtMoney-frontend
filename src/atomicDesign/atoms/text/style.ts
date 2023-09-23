import styled from 'styled-components'

interface ILink {
  color: string
  size: string
  weight: number
}

export const TextStyle = styled.span<ILink>`
  color: ${(props) => props.color};
  font: ${(props) => props.weight} ${(props) => props.size} var(--font);
`
