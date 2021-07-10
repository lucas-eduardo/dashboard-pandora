import { ElementType } from 'react'
import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom'

import { useAuth } from '@hooks/useAuth'

interface IRouteProps extends ReactRouteProps {
  isPrivate?: boolean
  module: ElementType
}

const Route = ({
  isPrivate = false,
  module: Component,
  ...rest
}: IRouteProps) => {
  const { userInfo } = useAuth()

  return (
    <ReactRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!userInfo ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export { Route }
