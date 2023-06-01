
        import type { Meta, StoryObj } from "@storybook/react";
        import { Tabs } from "./tabs";

        const meta: Meta<typeof Tabs> = {
          title: "Example/Tabs",
          component: Tabs,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Tabs>;

        export const Default: Story = {
          args: {},
        };
        