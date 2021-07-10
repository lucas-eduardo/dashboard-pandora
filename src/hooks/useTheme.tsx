import { useContextSelector } from 'use-context-selector'

import { ThemeContext } from '@contexts/Theme'

const useTheme = () => {
  const modeTheme = useContextSelector(ThemeContext, ({ theme }) => theme)
  const handleChangeTheme = useContextSelector(
    ThemeContext,
    ({ handleChange }) => handleChange,
  )

  return {
    modeTheme,
    handleChangeTheme,
  }
}

export { useTheme }
