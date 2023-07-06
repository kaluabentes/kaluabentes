import { KeyboardEvent, ReactNode, useState } from "react"

import { Container, Content, Trigger } from "./Tooltip.styles"

interface TooltipProps {
  id: string
  label: string
  children: ReactNode
}

const Tooltip = ({ id, label, children }: TooltipProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleKeydown = (event: KeyboardEvent) => {
    console.log("Key", event.key)
  }

  return (
    <Container role="tooltip">
      <Content $isActive={isActive} id={id}>
        {label}
      </Content>
      <Trigger
        onKeyDown={handleKeydown}
        onClick={() => setIsActive((prev) => !prev)}
        onBlur={() => setIsActive(false)}
        aria-labelledby={id}
      >
        {children}
      </Trigger>
    </Container>
  )
}

export default Tooltip
