import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AuthenticationProvider } from '@contexts/Authentication'
import { ThemeProvider } from '@contexts/Theme'
import Global from '@styles/global'

import 'react-toastify/dist/ReactToastify.css'

type AppProviderProps = {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <>
    <AuthenticationProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Global />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </AuthenticationProvider>

    <ToastContainer position="bottom-center" />
  </>
)

export { AppProvider }
