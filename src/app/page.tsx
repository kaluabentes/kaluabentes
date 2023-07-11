import { Metadata } from "next"

import experienceItems from "@/config/experienceItems"
import featureItems from "@/config/featureItems"
import techItems from "@/config/techItems"
import Container from "@/design-system/components/Container"
import ExperienceGrid from "@/design-system/components/ExperienceGrid/ExperienceGrid"
import FeatureGrid from "@/design-system/components/FeatureGrid/FeatureGrid"
import TechGrid from "@/design-system/components/TechGrid"

import AboutSection from "./home/components/AboutSection"
import HomeHero from "./home/components/HomeHero"

export const metadata: Metadata = {
  title: "Kaluã Bentes - Desenvolvedor Frontend",
  description:
    "Com 10 anos de experiência na indústria de desenvolvimento de software, possuo um sólido conhecimento em tecnologias front-end, incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e Vue.js.",
  openGraph: {
    images: ["https://kaluabentes.vercel.app/screenshot.png"],
  },
}

const Home = () => (
  <Container size="lg">
    <HomeHero />
    <AboutSection />
    <FeatureGrid
      title="Diferenciais"
      paragraph="Algumas das habilidades que venho construindo ao longo dos anos."
      items={featureItems}
    />
    <TechGrid
      title="Tecnologias"
      items={techItems.filter(
        (techItem) =>
          !["php", "angular", "laravel", "gulp"].includes(techItem.name)
      )}
    />
    <ExperienceGrid title="Experiência" experienceItems={experienceItems} />
  </Container>
)

export default Home
