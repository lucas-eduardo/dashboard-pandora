import { ElementType } from 'react'
import { FiHome, FiUpload } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

type Item = {
  label: string
  path: string
  icon: ElementType
}

const useMenu = () => {
  const { pathname } = useLocation()

  const prefix = '/dashboard'

  const menus = {
    home: {
      label: 'Home',
      path: `${prefix}`,
      icon: FiHome,
    },
    upload: {
      label: 'Upload',
      path: `${prefix}/upload`,
      icon: FiUpload,
    },
  }

  const items: Item[] = Object.keys(menus).map(key => menus[key as never])

  const hadleNavLinkClass = (path: string) =>
    pathname === path ? 'active' : ''

  return {
    menus,
    items,
    hadleNavLinkClass,
  }
}

export { useMenu }
