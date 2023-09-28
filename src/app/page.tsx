import { Metadata } from "next"

import HomeView from "./view"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.CANONICAL_URL as string),
  title: "Kaluã Bentes - Desenvolvedor Frontend",
  description:
    "Com 10 anos de experiência na indústria de desenvolvimento de software, possuo um sólido conhecimento em tecnologias front-end, incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e Vue.js.",
  openGraph: {
    images: "/screenshot.png",
  },
}

const Home = () => <HomeView />

export default Home
