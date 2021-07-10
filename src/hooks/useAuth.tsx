import { useContextSelector } from 'use-context-selector'

import { AuthenticationContext } from '@contexts/Authentication'

const useAuth = () => {
  const userInfo = useContextSelector(AuthenticationContext, ({ user }) => user)
  const signIn = useContextSelector(
    AuthenticationContext,
    ({ handleSignIn }) => handleSignIn,
  )
  const signOut = useContextSelector(
    AuthenticationContext,
    ({ handleSignOut }) => handleSignOut,
  )

  return {
    userInfo,
    signIn,
    signOut,
  }
}

export { useAuth }
