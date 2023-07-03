import type { Meta, StoryObj } from "@storybook/react"

import AppLayout from "./AppLayout"
import Heading from "../../design-system/components/Heading"
import Paragraph from "../../design-system/components/Paragraph"
import Container from "../../design-system/components/Container"

const meta: Meta<typeof AppLayout> = {
  title: "components/AppLayout",
  component: AppLayout,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppLayout>

export const Default: Story = {
  args: {
    children: (
      <Container>
        <Heading level={1}>A Visual Type Scale</Heading>
        <Paragraph>
          Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur
          veniam laborum. Qui exercitation exercitation voluptate tempor
          adipisicing officia cillum. Laborum ex labore eu consectetur laboris
          amet minim esse sunt eiusmod commodo mollit id. Qui sit nostrud magna
          enim sit dolor veniam quis voluptate in cillum aute Lorem. Cupidatat
          elit eiusmod ut et.
        </Paragraph>
        <Paragraph>
          Excepteur aliquip dolor sint magna. Excepteur est tempor incididunt
          eiusmod sint ipsum commodo aliqua dolore ad. Dolor irure adipisicing
          anim mollit cillum proident nulla. Labore laboris commodo aliquip non
          anim magna ipsum velit adipisicing ipsum. Et aute qui nulla tempor
          consequat.
        </Paragraph>
        <Heading level={2}>A Visual Type Scale</Heading>
        <Paragraph>
          Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur
          veniam laborum. Qui exercitation exercitation voluptate tempor
          adipisicing officia cillum. Laborum ex labore eu consectetur laboris
          amet minim esse sunt eiusmod commodo mollit id. Qui sit nostrud magna
          enim sit dolor veniam quis voluptate in cillum aute Lorem. Cupidatat
          elit eiusmod ut et.
        </Paragraph>
        <Heading level={3}>A Visual Type Scale</Heading>
        <Paragraph>
          Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur
          veniam laborum. Qui exercitation exercitation voluptate tempor
          adipisicing officia cillum. Laborum ex labore eu consectetur laboris
          amet minim esse sunt eiusmod commodo mollit id. Qui sit nostrud magna
          enim sit dolor veniam quis voluptate in cillum aute Lorem. Cupidatat
          elit eiusmod ut et.
        </Paragraph>
        <Heading level={4}>A Visual Type Scale</Heading>
        <Paragraph>
          Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur
          veniam laborum. Qui exercitation exercitation voluptate tempor
          adipisicing officia cillum. Laborum ex labore eu consectetur laboris
          amet minim esse sunt eiusmod commodo mollit id. Qui sit nostrud magna
          enim sit dolor veniam quis voluptate in cillum aute Lorem. Cupidatat
          elit eiusmod ut et.
        </Paragraph>
        <Heading level={5}>A Visual Type Scale</Heading>
        <Paragraph>
          Aute magna eu nulla non laborum. Ad adipisicing est duis pariatur
          veniam laborum. Qui exercitation exercitation voluptate tempor
          adipisicing officia cillum. Laborum ex labore eu consectetur laboris
          amet minim esse sunt eiusmod commodo mollit id. Qui sit nostrud magna
          enim sit dolor veniam quis voluptate in cillum aute Lorem. Cupidatat
          elit eiusmod ut et.
        </Paragraph>
      </Container>
    ),
  },
}
