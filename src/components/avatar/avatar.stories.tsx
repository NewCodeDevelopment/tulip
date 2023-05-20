import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "Example/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/logo.jpg" alt="test avatar" />
    </Avatar>
  ),
  args: {},
};
