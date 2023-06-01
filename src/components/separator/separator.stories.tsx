
        import type { Meta, StoryObj } from "@storybook/react";
        import { Separator } from "./separator";

        const meta: Meta<typeof Separator> = {
          title: "Example/Separator",
          component: Separator,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Separator>;

        export const Default: Story = {
          args: {},
        };
        