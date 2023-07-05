"use client"

import Hero from "@/design-system/components/Hero"

const HomeHero = () => (
  <Hero
    headline="Kaluã Bentes"
    paragraph="Desenvolvedor Frontend JAMStack, estudante de UI/UX e entusiasta de jogos HTML5. Minha missão é entregar telas de alta fidelidade, eficazes, acessíveis, performáticas e com um código escalável."
    buttonText="Vamos conversar"
    imageSrc="/kalua-bentes.png"
    imageAlt="Kaluã Bentes Avatar"
    onButtonClick={() => window.open("https://wa.link/iqi6kj", "_blank")}
  />
)

export default HomeHero
