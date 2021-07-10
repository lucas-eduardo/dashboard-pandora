import { Switch } from 'react-router-dom'

import { Route } from '@components/Route'
import { Authentication } from '@modules/Authentication'
import { Dashboard } from '@modules/Dashboard'

const Routes = () => (
  <Switch>
    <Route path="/dashboard" module={Dashboard} isPrivate />

    <Route path="/" module={Authentication} />
  </Switch>
)

export { Routes }
