"use client"

import Heading from "../Heading"
import TechIcon from "../TechIcon"
import { TechIconProps } from "../TechIcon/TechIcon"
import createKey from "../../utils/createKey"

import { Container, Grid } from "./TechGrid.styles"

interface TechGridProps {
  title: string
  items: TechIconProps[]
}

const TechGrid = ({ title, items }: TechGridProps) => (
  <Container>
    <Heading level={2} align="left">
      {title}
    </Heading>
    <Grid>
      {items.map((item, index) => (
        <TechIcon
          key={createKey(index)}
          label={item.label}
          name={item.name}
          icon={item.icon}
        />
      ))}
    </Grid>
  </Container>
)

export default TechGrid
