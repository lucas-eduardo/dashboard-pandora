import { Switch, Route } from 'react-router-dom'

import { Home } from './Home'
import { Upload } from './Upload'

const DashboardRoutes = () => (
  <Switch>
    <Route path="/dashboard" exact component={Home} />
    <Route path="/dashboard/upload" exact component={Upload} />
  </Switch>
)

export { DashboardRoutes }
