import { GridProject } from "@/design-system/components/ProjectGrid"

export const projects: GridProject[] = [
  {
    title: "Foodtron",
    description:
      "Plataforma que possibilita que restaurantes criem seu próprio menu online.",
    imageSrc: "/projects/foodtron.png",
    imageAlt: "Screenshot do Foodtron",
    tags: ["Next.js", "Multi tenant", "React"],
    path: "https://github.com/kaluabentes/foodtron",
  },
  {
    title: "AirCombat",
    description: "Um jogo de caça feito com o framework Phaser.js.",
    imageSrc: "/projects/aircombat.png",
    imageAlt: "Screenshot do AirCombat",
    tags: ["Games", "Phaser.js", "HTML5 Canvas"],
    path: "https://github.com/kaluabentes/aircombat-client",
  },
]
