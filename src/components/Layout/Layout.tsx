import { HeaderWrapper as Header } from "../Header/Header"
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import { useAppSelector } from "../../hooks/useAppSelector"
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"

export const Layout = () => {
  //const { user } = useAppSelector(state => state.root)
  // const { authLogin } = useActions()

  // useEffect(() => {
  //   if (!user) authLogin()
  // }, [authLogin, user])

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
