import { render } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import { ThemeProvider } from "styled-components"
import "@testing-library/jest-dom"
import "jest-styled-components"

import lightTheme from "@/design-system/theme/lightTheme"
import experienceItems from "@/config/experienceItems"

import ExperienceGrid from "./ExperienceGrid"

expect.extend(toHaveNoViolations)

const ThemedExperienceGrid = () => (
  <ThemeProvider theme={lightTheme}>
    <ExperienceGrid title="Experiência" experienceItems={experienceItems} />
  </ThemeProvider>
)

describe("ExperienceGrid", () => {
  it("renders without problems", () => {
    const { container } = render(<ThemedExperienceGrid />)

    expect(container).toBeInTheDocument()
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<ThemedExperienceGrid />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
