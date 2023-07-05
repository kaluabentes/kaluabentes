import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"

import TechIcon from "./TechIcon"
import { BiUser } from "react-icons/bi"

expect.extend(toHaveNoViolations)

const ThemedTechIcon = () => (
  <ThemeProvider theme={lightTheme}>
    <TechIcon icon={<BiUser />} name="next" />
  </ThemeProvider>
)

describe("TechIcon", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedTechIcon />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedTechIcon />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
