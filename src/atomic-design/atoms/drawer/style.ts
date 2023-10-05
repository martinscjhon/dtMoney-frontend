import styled from 'styled-components'

interface IDrawer {
  childrenWidth: string
}

export const PrincipalContainer = styled.div<IDrawer>`
  .box-principal {
    width: ${(props) => props.childrenWidth};
  }

  .header-drawer {
    display: flex;
    padding: 1rem 1.5rem;
    align-items: center;
    width: ${(props) => props.childrenWidth};
    justify-content: space-between;
    height: 3.5rem;
    background-color: var(--white);
    z-index: 999;
    box-shadow: rgba(5, 10, 20, 0.5) 0px -3px 8px 2px;

    span {
      font: 600 17px var(--font);
      color: var(--gray-200);
    }

    button {
      svg {
        font-size: 18px;
        color: var(--gray-200);
      }
    }
  }

  .content {
    padding: 1.5rem;
  }

  @media (max-width: 767px) {
    .box-principal {
      width: 100vw;
    }

    .header-drawer {
      width: 100vw;
    }
  }
`
