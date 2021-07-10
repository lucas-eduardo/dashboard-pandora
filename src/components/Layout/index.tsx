import { ReactNode } from 'react'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import {
  Box,
  Container,
  WrapperContent,
  WrapperHeader,
  WrapperMain,
  WrapperSidebar,
} from './styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Box>
        <WrapperHeader>
          <Header />
        </WrapperHeader>

        <WrapperContent>
          <WrapperSidebar>
            <Sidebar />
          </WrapperSidebar>

          <WrapperMain>{children}</WrapperMain>
        </WrapperContent>
      </Box>
    </Container>
  )
}

export { Layout }
