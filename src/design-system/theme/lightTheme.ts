import base from "./base"

import buttonLightTheme from "../components/Button/buttonLightTheme"
import palette from "./palette"

const lightTheme = {
  ...base,
  body: {
    color: palette.secondary[900],
  },
  components: {
    button: buttonLightTheme,
  },
}

export default lightTheme
