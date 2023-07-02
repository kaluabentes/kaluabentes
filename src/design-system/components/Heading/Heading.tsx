import { ReactNode } from "react"
import { Container } from "./Heading.styles"

const asHeading: { [key: number]: string } = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
}

interface HeadingProps {
  level?: number
  children: ReactNode
}

const Heading = ({ level = 2, children }: HeadingProps) => (
  <Container as={asHeading[level]}>{children}</Container>
)

export default Heading
