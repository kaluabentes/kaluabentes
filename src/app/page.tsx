import {
  BiAtom,
  BiCodeBlock,
  BiCodeCurly,
  BiMobileAlt,
  BiPlanet,
} from "react-icons/bi"
import { SiJamstack } from "react-icons/si"

import Container from "@/design-system/components/Container"
import FeatureGrid from "@/design-system/components/FeatureGrid/FeatureGrid"

import HomeHero from "./home/components/HomeHero"
import AboutSection from "./home/components/AboutSection"

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
      "Crie um progressive web app e ofereça uma experiência mais nativa.",
    icon: <BiMobileAlt />,
  },
  {
    title: "Jamstack",
    description:
      "Utilize uma arquitetura moderna que oferece máxima performance, mais segurança e baixo custo de infraestrutura.",
    icon: <SiJamstack />,
  },
  {
    title: "Design com código",
    description:
      "Crie um MVP fullstack aplicando todos os conhecimentos de UI/UX que venho absorvendo.",
    icon: <BiCodeCurly />,
  },
  {
    title: "Design Systems",
    description: "Crie um design system que reflita a identidade de sua marca.",
    icon: <BiAtom />,
  },
]

const Home = () => (
  <Container size="lg">
    <HomeHero />
    <AboutSection />
    <FeatureGrid
      title="Diferenciais"
      paragraph="Algumas das habilidades que venho acumulando com o passar dos anos."
      items={featureItems}
    />
  </Container>
)

export default Home
