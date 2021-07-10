import { useState } from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import { useMenu } from '@hooks/useMenu'

import {
  ActionSidebar,
  Container,
  Item,
  ListMenu,
  WrapperSidebar,
} from './styles'

const Sidebar = () => {
  const { items, hadleNavLinkClass } = useMenu()
  const [isSidebarFull, setIsSudebarFull] = useState(true)

  const handleActionSidebar = () => {
    setIsSudebarFull(oldValue => !oldValue)

    const sidebar = document.getElementById('sidebar')

    sidebar?.style.setProperty('--opacity', '0')

    sidebar?.addEventListener('transitionend', () => {
      sidebar.style.setProperty('--opacity', '1')
      sidebar.removeEventListener('transitionend', () => null)
    })
  }

  return (
    <Container id="sidebar" isFull={isSidebarFull}>
      <WrapperSidebar>
        <ListMenu>
          {items.map(({ path, icon: Icon, label }, key) => (
            <Item key={key} className={hadleNavLinkClass(path)}>
              <NavLink to={path} exact activeClassName="active">
                {Icon && <Icon />} {isSidebarFull && <span>{label}</span>}
              </NavLink>
            </Item>
          ))}
        </ListMenu>
      </WrapperSidebar>

      <ActionSidebar type="button" onClick={handleActionSidebar}>
        {isSidebarFull ? <FiChevronsLeft /> : <FiChevronsRight />}
      </ActionSidebar>
    </Container>
  )
}

export { Sidebar }
