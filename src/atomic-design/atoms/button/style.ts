import styled from 'styled-components'

interface IButton {
  weight: number
  backgorund: string
  width: string
  height: string
  color: string
}

export const ButtonStyle = styled.button<IButton>`
  background: ${(props) => props.backgorund};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font: ${(props) => props.weight} var(--size-button) var(--font);
  border-radius: var(--border-radius-button);
  color: ${(props) => props.color};
`
