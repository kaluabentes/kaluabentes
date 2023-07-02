"use client"

import { ReactNode } from "react"

import ThemeProvider from "@/design-system/theme/ThemeProvider"
import { ThemeContextProvider } from "@/design-system/theme/ThemeContext"

interface RootProvidersProps {
  children: ReactNode
}

const RootProviders = ({ children }: RootProvidersProps) => (
  <ThemeContextProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ThemeContextProvider>
)

export default RootProviders
