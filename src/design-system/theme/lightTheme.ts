import base from "./base"
import palette from "./palette"

const darkTheme = {
  ...base,
  colors: {
    background: "white",
    button: {
      primary: {
        background: palette.primary[600],
        backgroundHover: palette.primary[700],
      },
      default: {
        background: "white",
        backgroundHover: palette.secondary[100],
      },
    },
  },
}

export default darkTheme
