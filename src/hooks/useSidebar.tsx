import { useContextSelector } from 'use-context-selector'

import { SidebarContext } from '@contexts/Sidebar'

const useSidebar = () => {
  const extendedSidebar = useContextSelector(
    SidebarContext,
    sidebar => sidebar.extendedSidebar,
  )
  const handleExtendedSidebar = useContextSelector(
    SidebarContext,
    sidebar => sidebar.handleExtendedSidebar,
  )

  return {
    extendedSidebar,
    handleExtendedSidebar,
  }
}

export { useSidebar }
