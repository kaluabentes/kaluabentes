import type { Meta, StoryObj } from "@storybook/react"

import AppBar from "./AppBar"
import IconButton from "../IconButton/IconButton"
import { BiCloudLightning, BiLogoWhatsapp, BiMenu } from "react-icons/bi"

const meta: Meta<typeof AppBar> = {
  title: "components/AppBar",
  component: AppBar,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AppBar>

export const Default: Story = {
  render: () => (
    <AppBar>
      <IconButton icon={<BiMenu />} label="Menu" />
      <IconButton icon={<BiCloudLightning />} label="Menu" />
      <IconButton icon={<BiLogoWhatsapp />} label="Menu" />
    </AppBar>
  ),
}
