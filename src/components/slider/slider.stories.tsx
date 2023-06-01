
        import type { Meta, StoryObj } from "@storybook/react";
        import { Slider } from "./slider";

        const meta: Meta<typeof Slider> = {
          title: "Example/Slider",
          component: Slider,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Slider>;

        export const Default: Story = {
          args: {},
        };
        