import { Switch, Route } from 'react-router-dom'

import { SignIn } from './SignIn'

const AuthenticationRoutes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
  </Switch>
)

export { AuthenticationRoutes }
