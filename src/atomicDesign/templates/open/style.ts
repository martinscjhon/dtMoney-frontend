import styled from 'styled-components'

export const PrincipalContainer = styled.main`
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  position: relative;

  .ball {
    position: fixed;
    width: 21.2rem;
    height: 21.2rem;
    clip-path: circle();
    background: var(--green-opacity);
  }

  .top {
    right: -11rem;
    top: -15rem;
  }

  .bottom {
    right: 11rem;
    bottom: -19rem;
  }
`

export const Layout = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  margin-top: 2rem;
`
