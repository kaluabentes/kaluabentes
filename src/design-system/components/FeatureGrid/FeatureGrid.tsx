"use client"

import { ReactNode } from "react"

import { Container, Grid } from "./FeatureGrid.styles"
import FeatureCard from "../FeatureCard"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

interface FeatureGridProps {
  title: string
  paragraph: string
  items: {
    title: string
    description: string
    icon: ReactNode
  }[]
}

const FeatureGrid = ({ title, paragraph, items }: FeatureGridProps) => (
  <Container>
    <Heading level={2} align="center">
      {title}
    </Heading>
    <Paragraph align="center" variant="muted">
      {paragraph}
    </Paragraph>
    <Grid>
      {items.map((item) => (
        <FeatureCard
          key={item.title}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </Grid>
  </Container>
)

export default FeatureGrid
