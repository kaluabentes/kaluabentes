"use client"

import { ReactNode, useState } from "react"
import { BiMenu, BiMoon, BiPlanet, BiSun } from "react-icons/bi"

import { Main } from "./AppLayout.styles"
import menuItems from "../../config/menuItems"
import AppBar from "../../design-system/components/AppBar"
import IconButton from "../../design-system/components/IconButton/IconButton"
import SideNav from "../../design-system/components/SideNav"
import useTheme from "../../design-system/theme/ThemeProvider/useTheme"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { theme, toggleTheme } = useTheme()
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)

  return (
    <>
      <AppBar isFixed>
        <IconButton
          onClick={() => setIsSideNavOpen(true)}
          icon={<BiMenu />}
          label="Menu"
        />
        <IconButton icon={<BiPlanet />} label="Menu" />
        <IconButton
          onClick={() => toggleTheme()}
          icon={theme.name === "light" ? <BiSun /> : <BiMoon />}
          label="Light mode"
        />
      </AppBar>
      <SideNav
        isOpen={isSideNavOpen}
        menuItems={menuItems}
        onClose={() => setIsSideNavOpen(false)}
      />
      <Main>{children}</Main>
    </>
  )
}

export default AppLayout
