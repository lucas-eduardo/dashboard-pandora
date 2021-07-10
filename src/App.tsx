import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'

import { AuthenticationProvider } from '@contexts/Authentication'
import { ThemeProvider } from '@contexts/Theme'
import Global from '@styles/global'

import { Routes } from './router'

const App = () => {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      preventDuplicate
    >
      <AuthenticationProvider>
        <BrowserRouter>
          <ThemeProvider>
            <Global />

            <Routes />
          </ThemeProvider>
        </BrowserRouter>
      </AuthenticationProvider>
    </SnackbarProvider>
  )
}

export { App }
