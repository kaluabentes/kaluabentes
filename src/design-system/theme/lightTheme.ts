import base from "./base"

import buttonLightTheme from "../Button/buttonLightTheme"

const lightTheme = {
  ...base,
  components: {
    button: buttonLightTheme,
  },
}

export default lightTheme
