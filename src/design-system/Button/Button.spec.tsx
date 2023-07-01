import { render, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import "@testing-library/jest-dom"

import Button from "./Button"

expect.extend(toHaveNoViolations)

describe("Button", () => {
  it("renders without problems", () => {
    render(<Button>Action</Button>)

    const button = screen.getByRole("button")

    expect(button).toHaveTextContent("Action")
  })

  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Button>Action</Button>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
