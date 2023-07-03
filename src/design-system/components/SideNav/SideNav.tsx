import { BiX } from "react-icons/bi"
import IconButton from "../IconButton/IconButton"
import { Container, Header, List, ListItem, Title } from "./SideNav.styles"
import Link from "next/link"

interface SideNavProps {
  menuItems: {
    label: string
    path: string
  }[]
  isOpen?: boolean
  onClick: (path: string) => void
  onClose?: () => void
}

const SideNav = ({ menuItems = [], isOpen, onClose }: SideNavProps) => (
  <Container $isOpen={isOpen}>
    <Header>
      <Title>Navegação</Title>
      <IconButton onClick={onClose} icon={<BiX />} label="Fechar" />
    </Header>
    <List>
      {menuItems.map((menuItem) => (
        <ListItem key={menuItem.path}>
          <Link href={menuItem.path}>{menuItem.label}</Link>
        </ListItem>
      ))}
    </List>
  </Container>
)

export default SideNav
