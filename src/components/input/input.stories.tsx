import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const Disabled: Story = {
  args: {
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={args.id}>Email</Label>
      <Input {...args} />
    </div>
  ),
  args: {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={args.id}>Email</Label>
      <Input {...args} />
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  ),
  args: {
    id: "email-2",
    type: "email",
    placeholder: "Email",
  },
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
  args: {
    type: "email",
    placeholder: "Email",
  },
};

export const File: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={args.id}>Picture</Label>
      <Input {...args} />
    </div>
  ),
  args: {
    id: "picture",
    type: "file",
  },
};
