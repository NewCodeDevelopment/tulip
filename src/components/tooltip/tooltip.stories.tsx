
        import type { Meta, StoryObj } from "@storybook/react";
        import { Tooltip } from "./tooltip";

        const meta: Meta<typeof Tooltip> = {
          title: "Example/Tooltip",
          component: Tooltip,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Tooltip>;

        export const Default: Story = {
          args: {},
        };
        