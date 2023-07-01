import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"

import Button from "./Button"

expect.extend(toHaveNoViolations)

const ThemedButton = () => (
  <ThemeProvider theme={lightTheme}>
    <Button>Action</Button>
  </ThemeProvider>
)

describe("Button", () => {
  it("renders without problems", () => {
    render(<ThemedButton />)

    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Action")
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedButton />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
