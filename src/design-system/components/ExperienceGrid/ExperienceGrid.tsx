import createKey from "../../utils/createKey"
import ExperienceCard, { ExperienceCardProps } from "../ExperienceCard"
import Heading from "../Heading"

import { Container, Grid } from "./ExperienceGrid.styles"

interface ExperienceGridProps {
  title: string
  experienceItems: ExperienceCardProps[]
}

const ExperienceGrid = ({ title, experienceItems }: ExperienceGridProps) => (
  <Container>
    <Heading align="center">{title}</Heading>
    <Grid>
      {experienceItems.map((experienceItem, index) => (
        <ExperienceCard
          key={createKey(index)}
          role={experienceItem.role}
          description={experienceItem.description}
          period={experienceItem.period}
          company={experienceItem.company}
          city={experienceItem.city}
          techs={experienceItem.techs}
        />
      ))}
    </Grid>
  </Container>
)

export default ExperienceGrid
