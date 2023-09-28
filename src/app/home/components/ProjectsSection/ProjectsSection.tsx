"use client"

import ProjectGrid from "@/components/ProjectGrid"
import { projects } from "@/config/projectItems"

const ProjectsSection = () => (
  <ProjectGrid
    id="projects"
    title="Projetos"
    projects={projects}
    onCardClick={(path) => window.open(path, "_blank")}
  />
)

export default ProjectsSection
