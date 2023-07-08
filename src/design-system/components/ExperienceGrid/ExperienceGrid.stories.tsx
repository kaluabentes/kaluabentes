import type { Meta, StoryObj } from "@storybook/react"

import experienceItems from "../../../config/experienceItems"

import ExperienceGrid from "./ExperienceGrid"

const meta: Meta<typeof ExperienceGrid> = {
  title: "components/ExperienceGrid",
  component: ExperienceGrid,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ExperienceGrid>

export const Default: Story = {
  render: () => (
    <ExperienceGrid title="Experiência" experienceItems={experienceItems} />
  ),
}
