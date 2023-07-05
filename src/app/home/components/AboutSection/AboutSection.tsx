"use client"

import Button from "@/design-system/components/Button"
import Heading from "@/design-system/components/Heading"
import ImageContent from "@/design-system/components/ImageContent"
import Paragraph from "@/design-system/components/Paragraph"
import { ButtonBox } from "./AboutSection.styles"

const AboutSection = () => (
  <ImageContent
    title="Sobre"
    content={
      <>
        <Heading level={3}>
          Melhorando o mundo uma linha de código de cada vez
        </Heading>
        <Paragraph>
          Com 10 anos de experiência na indústria de desenvolvimento de
          software, possuo um sólido conhecimento em tecnologias front-end,
          incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e
          Vue.js. Minha habilidade de traduzir requisitos de design em código
          limpo e eficiente é uma das minhas principais características, o que
          resulta em interfaces de usuário rápidas, responsivas e visualmente
          atraentes.
        </Paragraph>
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
      </>
    }
    imageSrc="/about.jpg"
    imageAlt="Imagem de código frontend"
  />
)

export default AboutSection
