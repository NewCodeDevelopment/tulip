
        import type { Meta, StoryObj } from "@storybook/react";
        import { Textarea } from "./textarea";

        const meta: Meta<typeof Textarea> = {
          title: "Example/Textarea",
          component: Textarea,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Textarea>;

        export const Default: Story = {
          args: {},
        };
        