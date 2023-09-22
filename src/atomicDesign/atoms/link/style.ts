import styled from 'styled-components'

interface ILink {
  color: string
  size: string
  weight: number
  decoration: boolean
}

export const ContainerStyle = styled.div<ILink>`
  a {
    color: ${(props) => props.color};
    font: ${(props) => props.weight} ${(props) => props.size} var(--font);
    text-decoration: ${(props) => (props.decoration ? 'underline' : 'none')};
  }
`
