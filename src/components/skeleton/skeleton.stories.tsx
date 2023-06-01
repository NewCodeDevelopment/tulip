
        import type { Meta, StoryObj } from "@storybook/react";
        import { Skeleton } from "./skeleton";

        const meta: Meta<typeof Skeleton> = {
          title: "Example/Skeleton",
          component: Skeleton,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Skeleton>;

        export const Default: Story = {
          args: {},
        };
        