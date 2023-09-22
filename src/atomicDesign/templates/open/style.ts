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
  align-items: flex-start;
  margin-top: 2rem;

  img {
    animation: imageHome 0.9s cubic-bezier(0.215, 0.46, 0.45, 0.94);
  }

  form {
    margin-top: 5rem;
  }

  @keyframes imageHome {
    0% {
      transform: translateX(-1000px);
    }
    100% {
      transform: translateX(0);
    }
  }
`
