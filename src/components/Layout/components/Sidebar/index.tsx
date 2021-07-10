import { useMemo } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import { useMenu } from '@hooks/useMenu'
import { useSidebar } from '@hooks/useSidebar'

import {
  ActionSidebar,
  BorderRadius,
  Container,
  Item,
  Link,
  List,
  Title,
} from './styles'

const Sidebar = () => {
  const { items, hadleNavLinkClass } = useMenu()
  const { extendedSidebar, handleExtendedSidebar } = useSidebar()

  const classSidebar = useMemo(
    () => (extendedSidebar ? 'open' : ''),
    [extendedSidebar],
  )

  const IconSidebar = useMemo(
    () => (extendedSidebar ? FiChevronsLeft : FiChevronsRight),
    [extendedSidebar],
  )

  return (
    <Container className={classSidebar}>
      <List>
        <ActionSidebar type="button" onClick={handleExtendedSidebar}>
          <IconSidebar />
        </ActionSidebar>

        {items.map(({ path, icon: Icon, label }, key) => (
          <Item key={key} className={hadleNavLinkClass(path)}>
            <BorderRadius />
            <BorderRadius />
            <Link to={path}>
              <i>
                <Icon />
              </i>
              <Title>{label}</Title>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export { Sidebar }
