import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 0 16px;

  background-color: var(--background);

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;
`

export const ButtonMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  background-color: transparent;
  border: none;

  color: var(--color);

  cursor: pointer;

  svg {
    font-size: 1.8em;
  }

  @media (min-width: 660px) {
    display: none;
  }
`

export const WrapperActions = styled.div`
  display: flex;
  align-items: center;

  column-gap: 1rem;

  > button:nth-child(2) {
    display: none;
  }

  @media (min-width: 430px) {
    > button:nth-child(2) {
      display: initial;
    }
  }
`
