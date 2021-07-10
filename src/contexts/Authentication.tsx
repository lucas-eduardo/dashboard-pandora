import { useSnackbar } from 'notistack'
import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'

import { useStorage } from '@hooks/useStorage'

type UserState = {
  email: string
  name: string
}

type SignInProps = {
  email: string
  password: string
}

type AuthenticationContextData = {
  user: UserState | null
  handleSignIn: (payload: SignInProps) => void
  handleSignOut: () => void
}

type AuthenticationProviderProps = {
  children: ReactNode
}

const AuthenticationContext = createContext({} as AuthenticationContextData)

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const { enqueueSnackbar } = useSnackbar()
  const { getStorage, setStorage, removeKeyStorage } = useStorage()

  const [user, setUser] = useState<UserState | null>(() => {
    const userStorage = getStorage('user')

    if (userStorage) {
      const userParse = JSON.parse(userStorage)

      return userParse
    }

    return null
  })

  const handleSignIn = useCallback(
    ({ email, password }: SignInProps) => {
      const userInfo = {
        email,
        name: 'Lucas Eduardo',
      }

      console.log(password)

      const userStorageJson = JSON.stringify(userInfo)

      setStorage('user', userStorageJson)

      setUser(userInfo)
    },
    [setStorage],
  )

  const handleSignOut = useCallback(() => {
    removeKeyStorage('user')

    setUser(null)

    enqueueSnackbar('Logged out of the system', { variant: 'success' })
  }, [enqueueSnackbar, removeKeyStorage])

  return (
    <AuthenticationContext.Provider
      value={{ user, handleSignIn, handleSignOut }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export { AuthenticationContext, AuthenticationProvider }
