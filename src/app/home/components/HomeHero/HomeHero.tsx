"use client"

import Hero from "@/components/Hero"

const HomeHero = () => (
  <Hero
    id="hero"
    headline="Kaluã Bentes"
    paragraph="Desenvolvedor Frontend JAMStack e entusiasta UI/UX. Minha missão é entregar telas de alta fidelidade, eficazes e acessíveis."
    buttonText="Vamos conversar"
    imageSrc="/kalua-bentes.png"
    imageAlt="Kaluã Bentes Avatar"
    onButtonClick={() => window.open("https://wa.link/iqi6kj", "_blank")}
  />
)

export default HomeHero
