import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const Label = styled.label`
  font-size: 1.5rem;

  margin-bottom: 0.8rem;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;

  font-size: 1.5rem;

  padding: 0.8rem 1.2rem;

  color: var(--textfield-color);

  background-color: var(--textfield-background);

  border: 1px solid var(--textfield-border);

  border-radius: 0.6rem;

  transition: border-color 0.15s ease-in-out;

  &::placeholder {
    color: var(--textfield-placeholder-color);
  }

  &:focus {
    border-color: var(--textfield-border-focus);
  }
`
