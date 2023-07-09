import { ReactNode } from "react"
import { Container } from "./Tag.styles"

interface TagProps {
  children: ReactNode
  onClick?: () => void
}

const Tag = ({ children, onClick }: TagProps) => (
  <Container onClick={onClick}>{children}</Container>
)

export default Tag
