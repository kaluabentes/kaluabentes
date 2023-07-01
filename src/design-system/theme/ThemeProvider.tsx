import React, { ReactNode, useState } from "react"
import "@fontsource-variable/inter"

import ThemeContext from "./ThemeContext"
import GlobalStyles from "./GlobalStyles"
import lightTheme from "./lightTheme"
import darkTheme from "./darkTheme"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyles />
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
