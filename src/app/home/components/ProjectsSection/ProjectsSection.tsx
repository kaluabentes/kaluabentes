"use client"

import { projects } from "@/config/projectItems"
import ProjectGrid from "@/design-system/components/ProjectGrid"

const ProjectsSection = () => (
  <ProjectGrid
    title="Projetos"
    projects={projects}
    onCardClick={(path) => window.open(path, "_blank")}
  />
)

export default ProjectsSection
