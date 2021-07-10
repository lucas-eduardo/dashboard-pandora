import styled from 'styled-components'

type ContainerProps = {
  isFull: boolean
}

export const Container = styled.div<ContainerProps>`
  --opacity: 1;

  width: ${({ isFull }) => (isFull ? 250 : 80)}px;
  height: 100%;

  position: relative;

  padding: 40px 0 30px 16px;

  background-color: var(--sidebar);

  transition: width 0.4s;

  &:after {
    content: '';

    position: absolute;

    width: 8px;
    height: 100%;

    top: 0;
    right: 0;

    background-color: var(--background);
  }
`

export const ActionSidebar = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: 5px;
  right: 8px;

  background-color: var(--background);

  width: 30px;
  height: 30px;

  border: 3px solid var(--sidebar);

  border-radius: 100%;

  cursor: pointer;

  z-index: 1;

  color: var(--sidebar-color);
`

export const WrapperSidebar = styled.div`
  display: flex;
`

export const ListMenu = styled.ul`
  width: 100%;

  list-style: none;
`

export const Item = styled.li`
  position: relative;

  width: 100%;
  height: 45px;

  border-radius: 25px 0 0 25px;

  a {
    display: inline-flex;
    align-items: center;

    padding: 0 8px 0 20px;

    width: 100%;
    height: 100%;

    text-decoration: none;

    font-size: 1.6rem;

    color: var(--sidebar-color);

    column-gap: 16px;

    span {
      opacity: var(--opacity);

      transition: opacity 0.2s;
    }
  }

  &:hover,
  &.active {
    background-color: var(--background);

    a {
      color: var(--sidebar-color-active);
    }
  }

  &.active {
    &:before {
      content: '';

      position: absolute;

      width: 20px;
      height: 30px;

      border-radius: 0 25px 0 0;

      right: 0px;
      bottom: -30px;

      border: 8px solid var(--background);

      border-left: none;
      border-bottom: none;
    }

    &:after {
      content: '';

      position: absolute;

      width: 20px;
      height: 30px;

      border-radius: 0 0 25px 0;

      right: 0px;
      top: -30px;

      border: 8px solid var(--background);

      border-left: none;
      border-top: none;
    }
  }

  & + & {
    margin-top: 20px;
  }
`
