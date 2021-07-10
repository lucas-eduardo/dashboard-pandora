import styled from 'styled-components'

type ContainerProps = {
  size: number
  background: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  svg {
    width: 95%;
    height: 95%;
  }

  &::after {
    content: '';

    position: absolute;

    top: 0;
    right: 0;

    width: ${({ size }) => size / 3}px;
    height: ${({ size }) => size / 3}px;

    border-radius: 100%;

    background-color: ${({ background }) => background};
  }
`
