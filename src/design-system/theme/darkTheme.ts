import base from "./base"

import buttonDarkTheme from "../components/Button/buttonDarkTheme"
import palette from "./palette"

const darkTheme = {
  ...base,
  body: {
    color: "white",
  },
  hero: {
    color: "rgba(255, 255, 255, 0.7)",
  },
  components: {
    button: buttonDarkTheme,
  },
}

export default darkTheme
