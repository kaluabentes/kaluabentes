import techItems from "./techItems"

const experienceItems = [
  {
    role: "Frontend Developer",
    company: "Cheesecake Labs",
    description:
      "Como desenvolvedor frontend em uma empresa com clientes estrangeiros e startups, utilizei HTML, CSS, JavaScript, React.js, Storybook e Redux.js para criar interfaces atraentes e dinâmicas. Também trabalhei com Node.js, Django, Python e Wagtail, desenvolvendo aplicativos web robustos e escaláveis. Colaborei com equipes diversificadas, atendendo às demandas das startups em crescimento.",
    period: "Fev/2018 - Out/2019",
    city: "Florianópolis",
    techs: techItems.filter((techItem) =>
      [
        "html",
        "css",
        "javascript",
        "react",
        "next",
        "redux",
        "storybook",
        "nodejs",
        "django",
        "python",
        "wagtail",
      ].includes(techItem.name)
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Desenhei e implementei temas personalizados no WordPress utilizando PHP, JavaScript, HTML e CSS. Aprendi a criar interfaces atraentes, adicionar funcionalidades dinâmicas e personalizar a experiência do usuário. Aprofundei meus conhecimentos em gerenciamento de conteúdo e customização de temas e plugins, oferecendo soluções únicas para cada projeto.",
    period: "Jan/2017 - Jan/2018",
    company: "Alvo Comunicação Marketing e Inovação",
    city: "Guarapari / ES",
    techs: techItems.filter((techItem) =>
      ["html", "css", "javascript", "php", "mysql", "wordpress"].includes(
        techItem.name
      )
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Como desenvolvedor fullstack, tive a oportunidade de utilizar HTML, JavaScript, CSS, PHP, Laravel e MySQL para construir plataformas e sites. Com essas tecnologias, pude criar interfaces atraentes, implementar funcionalidades dinâmicas e desenvolver aplicações robustas e escaláveis, proporcionando uma experiência de alta qualidade para os usuários.",
    period: "Jan/2015 - Jul/2016",
    company: "Wikiz Comunicação Digital",
    city: "Guarapari / ES",
    techs: techItems.filter((techItem) =>
      ["html", "css", "javascript", "php", "mysql", "laravel"].includes(
        techItem.name
      )
    ),
  },
  {
    role: "Full Stack Developer",
    description:
      "Trabalhar no desenvolvimento do sistema interno de gerenciamento de alunos, com módulos como sistema de notas e controle de leitura anual, utilizando tecnologias como HTML, JavaScript, Angular 1, CSS, PHP, OOP, MySQL, Bootstrap, trouxe benefícios como facilidade de acesso às notas, análise do desempenho acadêmico, incentivo à leitura, experiência do usuário agradável e responsiva, além de uma administração eficiente e positiva para educadores e alunos. Construi um app para Android com Angular e Cordova para controlar a leitura de livros.",
    period: "Fev/2013 - Nov/2015",
    company: "Seminário Teológico Servos de Cristo",
    city: "Guarapari / ES",
    techs: techItems.filter((techItem) =>
      ["html", "css", "javascript", "angular", "php", "mysql"].includes(
        techItem.name
      )
    ),
  },
]

export default experienceItems
