"use client"

import { ReactNode } from "react"

import Heading from "../Heading"
import TechIcon from "../TechIcon"

import { Container, Grid } from "./TechGrid.styles"
import createKey from "../../../utils/react/createKey"
import { TechIconProps } from "../TechIcon/TechIcon"

interface TechGridProps {
  title: string
  items: {
    icon: ReactNode
    name: TechIconProps["name"]
  }[]
}

const TechGrid = ({ title, items }: TechGridProps) => (
  <Container>
    <Heading level={2} align="left">
      {title}
    </Heading>
    <Grid>
      {items.map((item, index) => (
        <TechIcon key={createKey(index)} name={item.name} icon={item.icon} />
      ))}
    </Grid>
  </Container>
)

export default TechGrid