import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

const meta: Meta<typeof Calendar> = {
  title: "Example/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
