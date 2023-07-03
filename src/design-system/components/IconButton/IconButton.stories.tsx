import type { Meta, StoryObj } from "@storybook/react"

import IconButton from "./IconButton"
import { BiMenu } from "react-icons/bi"

const meta: Meta<typeof IconButton> = {
  title: "components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: <BiMenu />,
    label: "Menu",
  },
}
