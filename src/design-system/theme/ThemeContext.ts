import { createContext } from "react"

import lightTheme from "./lightTheme"

interface Theme {
  theme: typeof lightTheme
  toggleTheme: () => void
}

const ThemeContext = createContext<Theme | null>(null)

export default ThemeContext
