"use client"

import ExperienceGrid from "@/components/ExperienceGrid"
import FeatureGrid from "@/components/FeatureGrid"
import Hero from "@/components/Hero"
import ImageContent from "@/components/ImageContent"
import ProjectGrid from "@/components/ProjectGrid"
import TechGrid from "@/components/TechGrid"
import experienceItems from "@/config/experienceItems"
import featureItems from "@/config/featureItems"
import { projects } from "@/config/projectItems"
import techItems from "@/config/techItems"

export default function HomeView() {
  return (
    <>
      <Hero
        id="hero"
        headline="Kaluã Bentes"
        paragraph="Desenvolvedor Frontend desde 2013. Minha missão é entregar telas de alta fidelidade, eficazes e acessíveis."
        buttonText="Vamos conversar"
        imageSrc="/kalua-bentes.png"
        imageAlt="Kaluã Bentes Avatar"
        onButtonClick={() => window.open("https://wa.link/iqi6kj", "_blank")}
      />
      <ImageContent
        title="Sobre mim"
        subtitle="Melhorando o mundo uma linha de código de cada vez"
        content="Com 10 anos de experiência na indústria de desenvolvimento de
          software, possuo um sólido conhecimento em tecnologias front-end,
          incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e
          Vue.js. Minha habilidade de traduzir requisitos de design em código
          limpo e eficiente é uma das minhas principais características, o que
          resulta em interfaces de usuário rápidas, responsivas e visualmente
          atraentes."
        id="about"
        imageSrc="/about.jpg"
        imageAlt="Imagem de código frontend"
      />
      <TechGrid
        id="technologies"
        title="Tecnologias"
        items={techItems.filter(
          (techItem) =>
            !["php", "angular", "laravel", "gulp"].includes(techItem.name)
        )}
      />
      <FeatureGrid
        id="features"
        title="Diferenciais"
        paragraph="Algumas das habilidades que venho construindo ao longo dos anos."
        items={featureItems}
      />
      <ExperienceGrid
        id="experiences"
        title="Experiência"
        experienceItems={experienceItems}
      />
      <ProjectGrid
        id="projects"
        title="Projetos"
        projects={projects}
        onCardClick={(path) => window.open(path, "_blank")}
      />
    </>
  )
}
