
        import type { Meta, StoryObj } from "@storybook/react";
        import { Popover } from "./popover";

        const meta: Meta<typeof Popover> = {
          title: "Example/Popover",
          component: Popover,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Popover>;

        export const Default: Story = {
          args: {},
        };
        