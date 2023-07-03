"use client"

import React, { ReactNode } from "react"
import "./font"

import GlobalStyles from "./GlobalStyles"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import useTheme from "./useTheme"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme()

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}

export default ThemeProvider
