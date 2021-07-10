import { AppProvider } from '@providers/AppProvider'

import { Routes } from './router'

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export { App }
