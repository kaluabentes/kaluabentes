import { ReactNode } from "react"

import { Icon } from "./TechIcon.styles"
import Tooltip from "../Tooltip"

export interface TechIconProps {
  icon: ReactNode
  label: string
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
    | "eslint"
    | "shopify"
    | "react-native"
}

const TechIcon = ({ icon, name, label }: TechIconProps) => (
  <Tooltip id={name} label={label}>
    <Icon $name={name}>{icon}</Icon>
  </Tooltip>
)

export default TechIcon
