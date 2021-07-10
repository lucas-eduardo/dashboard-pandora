import { ElementType } from 'react'

import { Container } from './styles'

type IconBadgeProps = {
  icon: ElementType
  color: string
  size?: number
  iconColor?: string
}

const IconBadge = ({
  icon: Icon,
  color,
  size = 25,
  iconColor = '#333',
}: IconBadgeProps) => {
  return (
    <Container size={size} background={color}>
      <Icon color={iconColor} />
    </Container>
  )
}

export { IconBadge }
