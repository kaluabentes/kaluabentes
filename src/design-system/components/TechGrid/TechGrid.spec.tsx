import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"
import techItems from "@/config/techItems"

import TechGrid from "./TechGrid"

expect.extend(toHaveNoViolations)

const ThemedTechGrid = () => (
  <ThemeProvider theme={lightTheme}>
    <TechGrid title="Features" items={techItems} />
  </ThemeProvider>
)

describe("TechGrid", () => {
  it("renders without problems", () => {
    render(<ThemedTechGrid />)

    expect(screen.getByText("Features")).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedTechGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
