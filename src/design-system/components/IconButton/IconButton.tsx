import { ReactNode } from "react"
import { Container } from "./IconButton.styles"

interface IconButtonProps {
  icon: ReactNode
  label: string
  onClick?: () => void
}

const IconButton = ({ icon, label, onClick }: IconButtonProps) => (
  <Container onClick={onClick} aria-label={label}>
    {icon}
  </Container>
)

export default IconButton
