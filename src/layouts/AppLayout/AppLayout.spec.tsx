import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"

import AppLayout from "./AppLayout"

expect.extend(toHaveNoViolations)

const ThemedAppLayout = () => (
  <ThemeProvider theme={lightTheme}>
    <AppLayout>Content</AppLayout>
  </ThemeProvider>
)

jest.mock("../../design-system/theme/useTheme", () => {
  return jest.fn(() => ({
    theme: {},
    toggleTheme: () => {},
  }))
})

describe("AppLayout", () => {
  it("renders without problems", () => {
    render(<ThemedAppLayout />)

    const content = screen.getByText("Content")

    expect(content).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedAppLayout />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
