import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";

const meta: Meta<typeof Collapsible> = {
  title: "Example/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

const Template: Story["render"] = (args) => (
  <Collapsible {...args}>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects. No attribution required.
    </CollapsibleContent>
  </Collapsible>
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
