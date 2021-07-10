import { ReactNode } from 'react'

import { Layout } from '@components/Layout'
import { SidebarProvider } from '@contexts/Sidebar'

type DashboardProviderProps = {
  children: ReactNode
}

const DashboardProvider = ({ children }: DashboardProviderProps) => (
  <SidebarProvider>
    <Layout>{children}</Layout>
  </SidebarProvider>
)

export { DashboardProvider }
