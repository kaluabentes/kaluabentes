"use client"

import { ReactNode } from "react"
import { BiCloudLightning, BiLogoWhatsapp, BiMenu } from "react-icons/bi"

import AppBar from "../../design-system/components/AppBar"
import IconButton from "../../design-system/components/IconButton/IconButton"

interface AppLayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <>
    <AppBar>
      <IconButton icon={<BiMenu />} label="Menu" />
      <IconButton icon={<BiCloudLightning />} label="Menu" />
      <IconButton icon={<BiLogoWhatsapp />} label="Menu" />
    </AppBar>
    {children}
  </>
)

export default AppLayout
