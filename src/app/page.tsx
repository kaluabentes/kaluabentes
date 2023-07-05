import Container from "@/design-system/components/Container"
import FeatureGrid from "@/design-system/components/FeatureGrid/FeatureGrid"
import TechGrid from "@/design-system/components/TechGrid"
import techItems from "@/config/techItems"
import featureItems from "@/config/featureItems"

import HomeHero from "./home/components/HomeHero"
import AboutSection from "./home/components/AboutSection"

const Home = () => (
  <Container size="lg">
    <HomeHero />
    <AboutSection />
    <FeatureGrid
      title="Diferenciais"
      paragraph="Algumas das habilidades que venho construindo ao longo dos anos."
      items={featureItems}
    />
    <TechGrid title="Tecnologias" items={techItems} />
  </Container>
)

export default Home
