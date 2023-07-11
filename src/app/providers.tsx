"use client"

import { ReactNode } from "react"

import ThemeProvider from "@/design-system/theme/ThemeProvider"

interface RootProvidersProps {
  children: ReactNode
}

const RootProviders = ({ children }: RootProvidersProps) => (
  <ThemeProvider>{children}</ThemeProvider>
)

export default RootProviders
