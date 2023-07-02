import { ReactNode } from "react"
import { Container } from "./AppBar.styles"

interface AppBarProps {
  children: ReactNode
}

const AppBar = ({ children }: AppBarProps) => <Container>{children}</Container>

export default AppBar
