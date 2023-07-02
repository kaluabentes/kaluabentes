import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"

import Paragraph from "./Paragraph"

expect.extend(toHaveNoViolations)

const Themed = () => (
  <ThemeProvider theme={lightTheme}>
    <Paragraph>Action</Paragraph>
  </ThemeProvider>
)

describe("Paragraph", () => {
  it("renders without problems", () => {
    render(<Themed />)
    expect(screen.getByText("Action")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Themed />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
