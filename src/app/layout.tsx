import StyledComponentsRegistry from "@/design-system/utils/StyledComponentsRegistry"
import AppLayout from "@/layouts/AppLayout"

import RootProviders from "./providers"

export const metadata = {
  title: "Kaluã Bentes - Desenvolvedor Frontend",
  description:
    "Com 10 anos de experiência na indústria de desenvolvimento de software, possuo um sólido conhecimento em tecnologias front-end, incluindo HTML5, CSS3, JavaScript e frameworks modernos como React e Vue.js.",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>
        <RootProviders>
          <AppLayout>{children}</AppLayout>
        </RootProviders>
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
