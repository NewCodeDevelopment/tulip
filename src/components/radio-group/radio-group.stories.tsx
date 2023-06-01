
        import type { Meta, StoryObj } from "@storybook/react";
        import { RadioGroup } from "./radio-group";

        const meta: Meta<typeof RadioGroup> = {
          title: "Example/RadioGroup",
          component: RadioGroup,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof RadioGroup>;

        export const Default: Story = {
          args: {},
        };
        