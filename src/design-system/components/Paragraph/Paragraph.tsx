import { ReactNode } from "react"
import { Container } from "./Paragraph.styles"

interface ParagraphProps {
  children: ReactNode
}

const Paragraph = ({ children }: ParagraphProps) => (
  <Container>{children}</Container>
)

export default Paragraph
