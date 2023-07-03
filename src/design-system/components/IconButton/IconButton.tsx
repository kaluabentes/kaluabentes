import { ReactNode } from "react"
import { Container } from "./IconButton.styles"

interface IconButtonProps {
  icon: ReactNode
  label: string
}

const IconButton = ({ icon, label }: IconButtonProps) => (
  <Container aria-label={label}>{icon}</Container>
)

export default IconButton
