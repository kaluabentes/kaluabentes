import {
  BiAtom,
  BiCodeBlock,
  BiCodeCurly,
  BiMobileAlt,
  BiPlanet,
} from "react-icons/bi"
import { SiJamstack } from "react-icons/si"

const featureItems = [
  {
    title: "Ownership",
    description:
      "O sentimento base para o sucesso de qualquer projeto é o sentimento de dono.",
    icon: <BiPlanet />,
  },
  {
    title: "Clean Code",
    description:
      "Procuro estar sempre estudando novos padrões e boas práticas de codificação.",
    icon: <BiCodeBlock />,
  },
  {
    title: "PWA",
    description:
      "Construo progressive web apps para oferecer uma experiência mais nativa.",
    icon: <BiMobileAlt />,
  },
  {
    title: "Jamstack",
    description:
      "Uma arquitetura que oferece máxima performance, mais segurança e baixo custo de infraestrutura.",
    icon: <SiJamstack />,
  },
  {
    title: "Design com código",
    description:
      "Construo MVP's fullstack aplicando os príncipios de UI/UX aprendidos ao longo dos anos.",
    icon: <BiCodeCurly />,
  },
  {
    title: "Design Systems",
    description:
      "Consistência visual, eficiência, escalabilidade e colaboração aprimoradas.",
    icon: <BiAtom />,
  },
]

export default featureItems
