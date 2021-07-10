import { useMemo } from 'react'
import { FiPower, FiSettings } from 'react-icons/fi'
import { RiDropFill, RiDropLine } from 'react-icons/ri'

import { IconButton } from '@components/IconButton'
import { ModeTheme } from '@constants/modeTheme'
import { useAuth } from '@hooks/useAuth'
import { useTheme } from '@hooks/useTheme'

import { Container, WrapperActions, WrapperTitle } from './styles'

const Header = () => {
  const { signOut } = useAuth()
  const { modeTheme, handleChangeTheme } = useTheme()

  const Icon = useMemo(
    () => (modeTheme === ModeTheme.dark ? RiDropFill : RiDropLine),
    [modeTheme],
  )

  return (
    <Container>
      <WrapperTitle>
        <h2>Pandora</h2>
      </WrapperTitle>

      <WrapperActions>
        <IconButton
          icon={Icon}
          color="var(--icon-theme)"
          onClick={handleChangeTheme}
        />

        <IconButton icon={FiSettings} color="var(--icon-settings)" />

        <IconButton icon={FiPower} color="var(--icon-exit)" onClick={signOut} />
      </WrapperActions>
    </Container>
  )
}

export { Header }
