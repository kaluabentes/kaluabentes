import type { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"
import { withThemeFromJSXProvider } from "@storybook/addon-styling"

import "../src/design-system/theme/ThemeProvider/font"
import lightTheme from "../src/design-system/theme/lightTheme"
import darkTheme from "../src/design-system/theme/darkTheme"
import GlobalStyles from "../src/design-system/theme/GlobalStyles"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
}

export default preview
