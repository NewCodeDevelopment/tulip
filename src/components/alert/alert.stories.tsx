import type { Meta, StoryObj } from "@storybook/react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Example/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
  args: {
    children: "Alert",
    variant: "default",
  },
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
  args: {
    children: "Alert",
    variant: "destructive",
  },
};
