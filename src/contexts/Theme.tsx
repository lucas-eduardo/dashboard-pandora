import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

import { ModeTheme } from '@constants/modeTheme'
import { useStorage } from '@hooks/useStorage'

type ThemeContextData = {
  theme: ModeTheme
  handleChange: () => void
}

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext({} as ThemeContextData)

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { getStorage, setStorage } = useStorage()

  const [mode, setMode] = useState<ModeTheme>(() => {
    const isThemeStorage = getStorage('theme')

    if (isThemeStorage) {
      return isThemeStorage === ModeTheme.dark
        ? ModeTheme.dark
        : ModeTheme.light
    }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    return isDark ? ModeTheme.dark : ModeTheme.light
  })

  const handleChange = useCallback(() => {
    setMode(oldMode => {
      const theme =
        oldMode === ModeTheme.light ? ModeTheme.dark : ModeTheme.light

      setStorage('theme', theme)

      return theme
    })
  }, [setStorage])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  return (
    <ThemeContext.Provider value={{ theme: mode, handleChange }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
