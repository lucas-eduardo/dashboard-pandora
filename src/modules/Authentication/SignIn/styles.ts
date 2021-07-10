import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 350px;

  padding: 2rem;
`

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3.6rem;

  span {
    font-size: 3.6rem;
  }
`

export const WrapperFields = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  row-gap: 2.2rem;
`
