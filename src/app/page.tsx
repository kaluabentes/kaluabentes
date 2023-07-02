import Container from "@/design-system/components/Container"

import HomeHero from "./home/components/HomeHero"
import AboutSection from "./home/components/AboutSection/AboutSection"

const Home = () => (
  <Container size="lg">
    <HomeHero />
    <hr />
    <AboutSection />
  </Container>
)

export default Home
