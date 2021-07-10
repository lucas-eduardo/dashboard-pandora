import { DashboardProvider } from '@providers/DashboardProvider'

import { DashboardRoutes } from './routes'

const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardRoutes />
    </DashboardProvider>
  )
}

export { Dashboard }
