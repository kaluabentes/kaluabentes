import { ReactNode } from "react"
import { Container } from "./Paragraph.styles"

export interface ParagraphProps {
  children: ReactNode
  variant?: "default" | "muted"
  isBold?: boolean
}

const Paragraph = ({
  children,
  variant = "default",
  isBold = false,
}: ParagraphProps) => (
  <Container $variant={variant} $isBold={isBold}>
    {children}
  </Container>
)

export default Paragraph
