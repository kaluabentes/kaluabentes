import { ReactNode } from "react"

import { Container } from "./Button.styles"

export interface ButtonProps {
  children: ReactNode
  variant?: "default" | "primary"
  size?: "sm" | "md" | "lg"
  isBlock?: boolean
}

const Button = ({
  children,
  variant = "default",
  size = "md",
  isBlock = false,
}: ButtonProps) => (
  <Container $variant={variant} $size={size} $isBlock={isBlock}>
    {children}
  </Container>
)

export default Button
