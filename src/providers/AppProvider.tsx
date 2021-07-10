import { SnackbarProvider } from 'notistack'
import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthenticationProvider } from '@contexts/Authentication'
import { ThemeProvider } from '@contexts/Theme'
import Global from '@styles/global'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    preventDuplicate
  >
    <AuthenticationProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Global />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </AuthenticationProvider>
  </SnackbarProvider>
)

export { AppProvider }
