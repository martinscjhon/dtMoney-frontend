import styled from 'styled-components'

export const Form = styled.form`
  height: 10rem;
  width: 50%;

  .actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button:nth-child(1) {
      margin-bottom: 1rem;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
`
