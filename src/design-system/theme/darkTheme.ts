import base from "./base"

import buttonDarkTheme from "../components/Button/buttonDarkTheme"

const darkTheme = {
  ...base,
  body: {
    color: "white",
  },
  components: {
    button: buttonDarkTheme,
  },
}

export default darkTheme
