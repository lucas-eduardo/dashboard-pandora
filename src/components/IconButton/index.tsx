import { ElementType, ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface IIconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  icon: ElementType
  color: string
  size?: number
}

const IconButton = ({
  icon: Icon,
  size = 48,
  color,
  ...rest
}: IIconButtonProps) => {
  return (
    <Container type="button" size={size} {...rest}>
      <Icon color={color} />
    </Container>
  )
}

export { IconButton }
