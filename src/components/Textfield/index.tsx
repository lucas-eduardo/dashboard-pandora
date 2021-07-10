import { forwardRef, InputHTMLAttributes } from 'react'

import { Container, Input, Label } from './styles'

interface ITextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  label: string
}

const Textfield = forwardRef<HTMLInputElement, ITextfieldProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <Container>
        <Label htmlFor={id}>{label}</Label>

        <Input id={id} ref={ref} {...rest} />
      </Container>
    )
  },
)

Textfield.displayName = 'Textfield'

export { Textfield }
