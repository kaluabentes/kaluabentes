import { createContext, ReactNode, useState } from "react"

import darkTheme from "../darkTheme"
import lightTheme from "../lightTheme"

type Theme = typeof lightTheme

export interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const getMatchMedia = () => window.matchMedia("(prefers-color-scheme: dark)")
  const [theme, setTheme] = useState(
    getMatchMedia().matches ? darkTheme : lightTheme
  )

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
