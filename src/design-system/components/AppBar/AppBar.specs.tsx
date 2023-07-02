import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"

import AppBar from "./AppBar"

expect.extend(toHaveNoViolations)

const ThemedAppBar = () => (
  <ThemeProvider theme={lightTheme}>
    <AppBar>Action</AppBar>
  </ThemeProvider>
)

describe("AppBar", () => {
  it("renders without problems", () => {
    render(<ThemedAppBar />)

    const appbar = screen.getByRole("header")

    expect(appbar).toHaveTextContent("Action")
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedAppBar />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
