"use client"

import { ReactNode, useState } from "react"
import { BiMenu, BiMoon, BiPlanet, BiSun } from "react-icons/bi"

import Container from "@/components/Container"
import { Main } from "./AppLayout.styles"
import AppBar from "../../components/AppBar"
import IconButton from "../../components/IconButton/IconButton"
import SideNav from "../../components/SideNav"
import menuItems from "../../config/menuItems"
import useTheme from "../../theme/ThemeProvider/useTheme"

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
      <Main>
        <Container size="lg">{children}</Container>
      </Main>
    </>
  )
}

export default AppLayout
