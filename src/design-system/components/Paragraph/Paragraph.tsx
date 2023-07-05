import { ReactNode } from "react"
import { Container } from "./Paragraph.styles"

export interface ParagraphProps {
  children: ReactNode
  variant?: "default" | "muted"
  isBold?: boolean
  align?: "left" | "center" | "right"
}

const Paragraph = ({
  children,
  variant = "default",
  isBold = false,
  align = "left",
}: ParagraphProps) => (
  <Container $variant={variant} $isBold={isBold} $align={align}>
    {children}
  </Container>
)

export default Paragraph
