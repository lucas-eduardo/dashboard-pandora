import { useMemo } from 'react'
import { FiMenu, FiPower, FiSettings, FiX } from 'react-icons/fi'
import { RiDropFill, RiDropLine } from 'react-icons/ri'

import { IconButton } from '@components/IconButton'
import { ModeTheme } from '@constants/modeTheme'
import { useAuth } from '@hooks/useAuth'
import { useSidebar } from '@hooks/useSidebar'
import { useTheme } from '@hooks/useTheme'

import { ButtonMenu, Container, WrapperActions, WrapperLeft } from './styles'

const Header = () => {
  const { signOut } = useAuth()
  const { modeTheme, handleChangeTheme } = useTheme()
  const { extendedSidebar, handleExtendedSidebar } = useSidebar()

  const IconMenu = useMemo(
    () => (extendedSidebar ? FiX : FiMenu),
    [extendedSidebar],
  )

  const IconMode = useMemo(
    () => (modeTheme === ModeTheme.dark ? RiDropFill : RiDropLine),
    [modeTheme],
  )

  return (
    <Container>
      <WrapperLeft>
        <ButtonMenu type="button" onClick={handleExtendedSidebar}>
          <IconMenu />
        </ButtonMenu>

        <h2>Pandora</h2>
      </WrapperLeft>

      <WrapperActions>
        <IconButton
          icon={IconMode}
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
