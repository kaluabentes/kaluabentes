import base from "./base"

import buttonDarkTheme from "../Button/buttonDarkTheme"

const darkTheme = {
  ...base,
  components: {
    button: buttonDarkTheme,
  },
}

export default darkTheme
