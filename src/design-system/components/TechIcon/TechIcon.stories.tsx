import type { Meta, StoryObj } from "@storybook/react"

import TechIcon from "./TechIcon"
import { SiNextdotjs } from "react-icons/si"

const meta: Meta<typeof TechIcon> = {
  title: "components/TechIcon",
  component: TechIcon,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TechIcon>

export const Default: Story = {
  args: {
    icon: <SiNextdotjs />,
    name: "next",
  },
}
