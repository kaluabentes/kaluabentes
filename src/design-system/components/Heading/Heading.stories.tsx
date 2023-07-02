import type { Meta, StoryObj } from "@storybook/react"

import Heading from "./Heading"

const meta: Meta<typeof Heading> = {
  title: "components/Heading",
  component: Heading,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  render: () => (
    <>
      <Heading level={1}>A Visual Type Scale</Heading>
      <Heading level={2}>A Visual Type Scale</Heading>
      <Heading level={3}>A Visual Type Scale</Heading>
      <Heading level={4}>A Visual Type Scale</Heading>
      <Heading level={5}>A Visual Type Scale</Heading>
    </>
  ),
}
