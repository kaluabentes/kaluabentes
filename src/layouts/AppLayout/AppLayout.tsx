"use client"

import { ReactNode, useState } from "react"
import { BiCloudLightning, BiMenu, BiMoon, BiSun } from "react-icons/bi"
import { useRouter } from "next/navigation"

import AppBar from "../../design-system/components/AppBar"
import IconButton from "../../design-system/components/IconButton/IconButton"
import SideNav from "../../design-system/components/SideNav"
import menuItems from "../../config/menuItems"
import useTheme from "../../design-system/theme/useTheme"

import { Main } from "./AppLayout.styles"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const router = useRouter()
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
        <IconButton icon={<BiCloudLightning />} label="Menu" />
        <IconButton
          onClick={() => toggleTheme()}
          icon={theme.name === "light" ? <BiSun /> : <BiMoon />}
          label="Light mode"
        />
      </AppBar>
      <SideNav
        isOpen={isSideNavOpen}
        onClick={(path) => router.push(path)}
        menuItems={menuItems}
        onClose={() => setIsSideNavOpen(false)}
      />
      <Main>{children}</Main>
    </>
  )
}

export default AppLayout
