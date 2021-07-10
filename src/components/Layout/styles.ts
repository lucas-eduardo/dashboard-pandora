import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Box = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 60px calc(100vh - 60px);
  grid-template-areas:
    'HEADER'
    'CONTENT';
`

export const WrapperHeader = styled.div`
  grid-area: HEADER;

  z-index: 3;
`
export const WrapperContent = styled.div`
  display: grid;

  width: 100%;
  height: 100%;

  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'SIDEBAR MAIN';

  grid-area: CONTENT;
`

export const WrapperSidebar = styled.div`
  grid-area: SIDEBAR;
`

export const WrapperMain = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--background);

  padding: 16px;

  grid-area: MAIN;
`
