import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

type SidebarContextData = {
  extendedSidebar: boolean
  handleExtendedSidebar: () => void
}

type SidebarProviderProps = {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextData)

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [extendedSidebar, setExtendedSidebar] = useState(false)

  const handleExtendedSidebar = useCallback(() => {
    setExtendedSidebar(oldValue => !oldValue)
  }, [])

  return (
    <SidebarContext.Provider value={{ extendedSidebar, handleExtendedSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvider }
