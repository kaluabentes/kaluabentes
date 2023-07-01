import palette from "../theme/palette"

const buttonDarkTheme = {
  primary: {
    background: palette.primary[500],
    backgroundHover: palette.primary[400],
    backgroundActive: palette.primary[700],
    borderColor: palette.primary[500],
    color: "white",
  },
  default: {
    background: palette.secondary[800],
    backgroundHover: palette.secondary[700],
    backgroundActive: palette.secondary[900],
    borderColor: palette.secondary[500],
    color: "white",
  },
}

export default buttonDarkTheme
