import { ReactNode } from "react"

import { Container } from "./Button.styles"

export interface ButtonProps {
  children: ReactNode
  variant?: "default" | "primary"
  size?: "sm" | "md" | "lg"
}

const Button = ({
  children,
  variant = "default",
  size = "md",
}: ButtonProps) => (
  <Container $variant={variant} $size={size}>
    {children}
  </Container>
)

export default Button
