import Container from "@/design-system/components/Container"

import HomeHero from "./home/components/HomeHero"
import AboutSection from "./home/components/AboutSection"

const Home = () => (
  <Container size="lg">
    <HomeHero />
    <AboutSection />
  </Container>
)

export default Home
