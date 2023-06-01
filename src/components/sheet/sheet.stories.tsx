
        import type { Meta, StoryObj } from "@storybook/react";
        import { Sheet } from "./sheet";

        const meta: Meta<typeof Sheet> = {
          title: "Example/Sheet",
          component: Sheet,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Sheet>;

        export const Default: Story = {
          args: {},
        };
        