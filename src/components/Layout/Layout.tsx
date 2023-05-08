import { HeaderWrapper as Header } from "../Header/Header"
import { Outlet } from 'react-router-dom'
import { AppShell } from '@mantine/core'
import { useFormStyle } from "./layout.style"
import { useActions } from "../../hooks/useActions"
import { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { keyStorageUser } from "../../api/consts"
import { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  const { classes } = useFormStyle()
  const { authLogin } = useActions()
  const { user } = useAppSelector(state => state.root)
  
  useEffect(() => {
    authLogin()
  }, [authLogin])

  useEffect(() => {
    localStorage.setItem(keyStorageUser, JSON.stringify(user))
  }, [user])

  return (
    <AppShell
      header={<Header />}
      classNames={{ main: classes.main, root: classes.root }}
    >  
      {children}
      <Outlet />
    </AppShell>
  )
}
