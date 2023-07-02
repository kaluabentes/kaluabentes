import { ReactNode, createContext, useContext, useState } from "react"

import lightTheme from "./lightTheme"
import darkTheme from "./darkTheme"

type Theme = typeof lightTheme

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) as ThemeContextValue

  if (typeof theme === "undefined") {
    throw new Error("Wrap the application with ThemeContextProvider")
  }

  return {
    theme,
    toggleTheme,
  }
}

export default ThemeContext
