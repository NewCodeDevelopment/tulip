
        import type { Meta, StoryObj } from "@storybook/react";
        import { Select } from "./select";

        const meta: Meta<typeof Select> = {
          title: "Example/Select",
          component: Select,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Select>;

        export const Default: Story = {
          args: {},
        };
        