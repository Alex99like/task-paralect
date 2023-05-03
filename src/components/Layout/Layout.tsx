import { HeaderWrapper as Header } from "../Header/Header"
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'

export const Layout = () => {
  return (
    <AppShell
      header={<Header />}
      styles={{
        root: { padding: 0 },
        main: { backgroundColor: '#F5F5F5' }
      }}
    >  
      <Outlet />
    </AppShell>
  )
}
