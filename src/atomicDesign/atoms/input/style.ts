import styled from 'styled-components'

export const PrincipalContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const ContainerStyle = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 1rem;
    top: 4px;
    color: var(--dark);
  }
`

export const InputStyle = styled.input`
  width: 100%;
  height: 1.9rem;
  padding: 0.438rem 0.5rem;
  line-height: 1.45;
  font-size: 13px;
  font-weight: 400;
  font-family: var(--font);
  background-color: var(--bg-input);
  outline: none;
  background-clip: padding-box;
  border: none;
  border-radius: 0.2rem;
  color: var(--dark);

  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ::placeholder {
    font-size: 10px;
    font-weight: 200;
  }

  :focus {
    border: 1px solid var(--gray-100);
    ::placeholder {
      transform: translateX(5px);
      transition: all 0.2s ease;
    }
  }

  input[type='date']::-webkit-calendar-picker-indicator,
  input[type='datetime-local']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(60%) sepia(10%) saturate(90%)
      hue-rotate(260deg);
  }

  input::-webkit-input-placeholder {
    font-family: var(--font);
    color: var(--gray-200);
    font-size: 12px;
  }

  input:disabled {
    background: var(--gray-100);
    cursor: not-allowed;
  }
`
