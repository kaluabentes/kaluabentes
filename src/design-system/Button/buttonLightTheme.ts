import palette from "../theme/palette"

const buttonLightTheme = {
  primary: {
    background: palette.primary[500],
    backgroundHover: palette.primary[700],
    backgroundActive: palette.primary[900],
    borderColor: palette.primary[500],
    color: "white",
  },
  default: {
    background: "white",
    backgroundHover: palette.secondary[50],
    backgroundActive: palette.secondary[200],
    borderColor: palette.secondary[300],
    color: palette.secondary[800],
  },
}

export default buttonLightTheme
