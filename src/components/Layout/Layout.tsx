import { HeaderWrapper as Header } from "../Header/Header"
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
// import { useActions } from "../../hooks/useActions"
// import { useEffect } from "react"
// import { useAppSelector } from "../../hooks/useAppSelector"

export const Layout = () => {
  // const { authLogin } = useActions()
  // const { user } = useAppSelector(state => state.root)
  // useEffect(() => {
  //   authLogin()
  // }, [authLogin])

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  return (
    <AppShell
      header={<Header />}
      styles={{
        root: { padding: 0 },
        main: { backgroundColor: '#F5F5F5', paddingLeft: 0, paddingRight: 0 }
      }}
    >  
      <Outlet />
    </AppShell>
  )
}
