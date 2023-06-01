
        import type { Meta, StoryObj } from "@storybook/react";
        import { Toggle } from "./toggle";

        const meta: Meta<typeof Toggle> = {
          title: "Example/Toggle",
          component: Toggle,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Toggle>;

        export const Default: Story = {
          args: {},
        };
        