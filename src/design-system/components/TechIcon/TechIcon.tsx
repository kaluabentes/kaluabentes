import { ReactNode } from "react"

import { Icon } from "./TechIcon.styles"

export interface TechIconProps {
  icon: ReactNode
  name:
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "react"
    | "redux"
    | "next"
    | "styled-components"
    | "vue"
    | "jest"
    | "testing-library"
    | "cypress"
    | "jamstack"
    | "pwa"
    | "nodejs"
    | "graphql"
    | "prisma"
    | "postgres"
    | "strapi"
    | "vercel"
    | "chatgpt"
    | "storybook"
}

const TechIcon = ({ icon, name }: TechIconProps) => (
  <Icon $name={name} aria-label={name}>
    {icon}
  </Icon>
)

export default TechIcon
