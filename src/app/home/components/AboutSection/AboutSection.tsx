"use client"

import Button from "@/design-system/components/Button"
import Hero from "@/design-system/components/Hero"

import { ButtonBox } from "./AboutSection.styles"

const AboutSection = () => (
  <Hero
    isReversed
    headingLevel={2}
    headline="Sobre mim"
    paragraph="Com 10 anos de experiência na indústria de desenvolvimento de software, possuo um sólido conhecimento em tecnologias front-end, incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e Vue.js. Minha habilidade de traduzir requisitos de design em código limpo e eficiente é uma das minhas principais características, o que resulta em interfaces de usuário rápidas, responsivas e visualmente atraentes."
    buttonText="Vamos conversar"
    imageSrc="/kalua-bentes.png"
    imageAlt="Kaluã Bentes Avatar"
    footerSlot={
      <ButtonBox>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/kalua-bentes/", "_blank")
          }
        >
          Linkedin
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/kaluabentes", "_blank")
          }
        >
          GitHub
        </Button>
      </ButtonBox>
    }
  />
)

export default AboutSection
