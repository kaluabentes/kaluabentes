import {
  SiCss3,
  SiCypress,
  SiEslint,
  SiGraphql,
  SiHtml5,
  SiJamstack,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiShopify,
  SiStorybook,
  SiStrapi,
  SiStyledcomponents,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"

import { TechIconProps } from "../design-system/components/TechIcon"

const techItems: TechIconProps[] = [
  {
    label: "HTML5",
    icon: <SiHtml5 aria-hidden />,
    name: "html",
  },
  {
    label: "CSS3",
    icon: <SiCss3 aria-hidden />,
    name: "css",
  },
  {
    label: "JavaScript",
    icon: <SiJavascript aria-hidden />,
    name: "javascript",
  },
  {
    label: "TypeScript",
    icon: <SiTypescript aria-hidden />,
    name: "typescript",
  },
  {
    label: "Node.js",
    icon: <SiNodedotjs aria-hidden />,
    name: "nodejs",
  },
  {
    label: "React",
    icon: <SiReact aria-hidden />,
    name: "react",
  },
  {
    label: "React Native",
    icon: <TbBrandReactNative aria-hidden />,
    name: "react-native",
  },
  {
    label: "Redux",
    icon: <SiRedux aria-hidden />,
    name: "redux",
  },
  {
    label: "Vue.js",
    icon: <SiVuedotjs aria-hidden />,
    name: "vue",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs aria-hidden />,
    name: "next",
  },
  {
    label: "Styled Components",
    icon: <SiStyledcomponents aria-hidden />,
    name: "styled-components",
  },
  {
    label: "Storybook",
    icon: <SiStorybook aria-hidden />,
    name: "storybook",
  },
  {
    label: "ESLint",
    icon: <SiEslint aria-hidden />,
    name: "eslint",
  },
  {
    label: "Jest",
    icon: <SiJest aria-hidden />,
    name: "jest",
  },
  {
    label: "Testing Library",
    icon: <SiTestinglibrary aria-hidden />,
    name: "testing-library",
  },
  {
    label: "Cypress",
    icon: <SiCypress aria-hidden />,
    name: "cypress",
  },
  {
    label: "Jamstack",
    icon: <SiJamstack aria-hidden />,
    name: "jamstack",
  },
  {
    label: "Progressive Web Apps",
    icon: <SiPwa aria-hidden />,
    name: "pwa",
  },
  {
    label: "GraphQL",
    icon: <SiGraphql aria-hidden />,
    name: "graphql",
  },
  {
    label: "Prisma",
    icon: <SiPrisma aria-hidden />,
    name: "prisma",
  },
  {
    label: "Postgres",
    icon: <SiPostgresql aria-hidden />,
    name: "postgres",
  },
  {
    label: "Strapi",
    icon: <SiStrapi aria-hidden />,
    name: "strapi",
  },
  {
    label: "Shopify",
    icon: <SiShopify aria-hidden />,
    name: "shopify",
  },
  {
    label: "Vercel",
    icon: <SiVercel aria-hidden />,
    name: "vercel",
  },
  {
    label: "ChatGPT",
    icon: <SiOpenai aria-hidden />,
    name: "chatgpt",
  },
]

export default techItems
