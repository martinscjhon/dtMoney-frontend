import styled from 'styled-components'

export const PrincipalContainer = styled.div`
  background-color: var(--white);
  height: 8rem;
  width: 352px;
  border-radius: 5px;
  padding: 2rem;

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;

    span {
      font: 400 16px var(--font);
      color: var(--dark);
    }
  }

  .currency {
    font: 500 25px var(--font);
    color: var(--purple-600);
  }
`
