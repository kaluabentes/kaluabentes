import { ReactNode } from "react"
import { Container } from "./Heading.styles"

const asHeading: { [key: number]: string } = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
}

interface HeadingProps {
  level?: number
  children: ReactNode
  align?: "left" | "center" | "right"
}

const Heading = ({ level = 2, children, align = "left" }: HeadingProps) => (
  <Container as={asHeading[level]} $align={align}>
    {children}
  </Container>
)

export default Heading
