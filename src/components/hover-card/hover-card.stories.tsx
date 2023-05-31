import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

const meta: Meta<typeof HoverCard> = {
  title: "Example/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof HoverCard>;

const Template: Story["render"] = (args) => (
  <HoverCard {...args}>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent>
  </HoverCard>
);

export const Default: Story = {
  render: Template,
  args: {},
};

export const Open: Story = {
  render: Template,
  args: {
    open: true,
  },
};
