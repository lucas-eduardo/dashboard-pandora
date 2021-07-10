import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;

  width: 0;
  height: 100%;

  border-left: 5px solid var(--sidebar);

  background-color: var(--sidebar);

  transition: width 0.5s;

  overflow-x: hidden;

  &.open {
    width: 260px;
  }

  @media (min-width: 660px) {
    position: relative;

    width: 80px;
  }
`

export const List = styled.ul`
  position: absolute;

  width: 100%;

  top: 0;
  left: 0;

  padding-left: 5px;
  padding-top: 40px;
`

export const ActionSidebar = styled.button`
  display: none;

  position: absolute;

  width: 40px;
  height: 40px;

  background-color: transparent;
  border: none;

  color: var(--sidebar-color);

  cursor: pointer;

  right: 0;
  top: 0;

  z-index: 1;

  svg {
    font-size: 25px;
  }

  @media (min-width: 660px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Item = styled.div`
  position: relative;

  width: 100%;

  list-style: none;

  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &.active {
    background-color: var(--background);

    i {
      display: block;
    }

    a {
      color: var(--sidebar-color-active);
    }
  }
`
export const BorderRadius = styled.i`
  &:nth-child(1) {
    display: none;

    position: absolute;

    width: 100%;
    height: 20px;

    top: -20px;

    background-color: var(--background);

    &:before {
      content: '';

      position: absolute;

      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      border-bottom-right-radius: 20px;

      background-color: var(--sidebar);
    }
  }

  &:nth-child(2) {
    display: none;

    position: absolute;

    width: 100%;
    height: 20px;

    bottom: -20px;

    background-color: var(--background);

    &:before {
      content: '';

      position: absolute;

      width: 100%;
      height: 100%;

      top: 0;
      left: 0;

      border-top-right-radius: 20px;

      background-color: var(--sidebar);
    }
  }
`

export const Link = styled(NavLink)`
  display: flex;

  width: 100%;

  text-decoration: none;

  color: var(--sidebar-color);

  i {
    display: block;

    min-width: 60px;
    height: 60px;

    line-height: 70px;

    text-align: center;

    svg {
      font-size: 1.5em;
    }
  }
`

export const Title = styled.span`
  display: block;

  height: 60px;

  padding-left: 10px;

  line-height: 60px;

  white-space: normal;
`
