import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => <button>{children}</button>

export default Button
