import styled from 'styled-components'

type ContainerProps = {
  size: number
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  border-style: none;
  border-radius: 50%;

  cursor: pointer;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  padding: ${({ size }) => size / 4}px;

  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  svg {
    width: ${({ size }) => size / 2}px;
    height: ${({ size }) => size / 2}px;
  }

  &:hover {
    background-color: var(--icon-button-background-hover);
  }

  &:active {
    background-color: var(--icon-button-background-active);
  }
`
