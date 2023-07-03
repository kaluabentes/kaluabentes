"use client"

import { ReactNode } from "react"
import { BiCloudLightning, BiMenu, BiMoon, BiSun } from "react-icons/bi"

import AppBar from "../../design-system/components/AppBar"
import IconButton from "../../design-system/components/IconButton/IconButton"
import useTheme from "../../design-system/theme/useTheme"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <AppBar>
        <IconButton icon={<BiMenu />} label="Menu" />
        <IconButton icon={<BiCloudLightning />} label="Menu" />
        <IconButton
          onClick={() => toggleTheme()}
          icon={theme.name === "light" ? <BiSun /> : <BiMoon />}
          label="Light mode"
        />
      </AppBar>
      {children}
    </>
  )
}

export default AppLayout
