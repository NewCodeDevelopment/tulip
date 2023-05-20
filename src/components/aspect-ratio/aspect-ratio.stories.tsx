import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from ".";

const meta: Meta<typeof AspectRatio> = {
  title: "Example/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <img src="/logo.jpg" alt="Test image" className="rounded-md object-cover" />
    </AspectRatio>
  ),
  args: {
    ratio: 1 / 1,
  },
};
