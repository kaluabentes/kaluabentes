"use client"

import Hero from "@/design-system/components/Hero"

const HomeHero = () => (
  <Hero
    headline="Kaluã Bentes"
    paragraph="Desenvolvedor frontend com experiência em diversas tecnologias e frameworks. Minha missão é entregar telas de alta fidelidade, eficazes, acessíveis, perfomáticas e com um código escalável."
    buttonText="Vamos conversar"
    imageSrc="/kalua-bentes.png"
    imageAlt="Kaluã Bentes Avatar"
    onButtonClick={() => window.open("https://wa.link/iqi6kj", "_blank")}
  />
)

export default HomeHero