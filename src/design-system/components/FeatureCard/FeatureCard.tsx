import { ReactNode } from "react"

import Heading from "../Heading"
import Paragraph from "../Paragraph"

import { Container, Icon } from "./FeatureCard.styles"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => (
  <Container>
    <Icon>{icon}</Icon>
    <Heading level={4}>{title}</Heading>
    <Paragraph variant="muted">{description}</Paragraph>
  </Container>
)

export default FeatureCard
