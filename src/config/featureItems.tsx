import { BiAtom, BiCodeBlock, BiMobileAlt, BiTestTube } from "react-icons/bi"
import { GiLunarModule } from "react-icons/gi"
import { SiJamstack } from "react-icons/si"

const featureItems = [
  {
    title: "Código Testável",
    description:
      "Garanto uma boa cobertura de testes utilizando tecnologias como Jest, Testing Library e Cypress.",
    icon: <BiTestTube />,
  },
  {
    title: "Código Modular",
    description:
      "Sou obsecado pela criação de componentes reutilizáveis, seja funções utilitárias ou pedaços de UI.",
    icon: <GiLunarModule />,
  },
  {
    title: "Clean Code",
    description:
      "Eu escrevo código que pode ser facilmente compreendido por outros desenvolvedores.",
    icon: <BiCodeBlock />,
  },
  {
    title: "Jamstack",
    description:
      "Construo com uma arquitetura que oferece máxima performance, mais segurança e baixo custo de infraestrutura.",
    icon: <SiJamstack />,
  },
  {
    title: "PWA",
    description:
      "Construo web apps com experiência de app nativo, oferecendo maior imersão em um web app.",
    icon: <BiMobileAlt />,
  },
  {
    title: "Design Systems",
    description:
      "Crio bibliotecas de componentes que garantem mais consistência visual, eficiência e escalabilidade.",
    icon: <BiAtom />,
  },
]

export default featureItems
