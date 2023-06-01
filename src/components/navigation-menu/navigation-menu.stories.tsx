
        import type { Meta, StoryObj } from "@storybook/react";
        import { NavigationMenu } from "./navigation-menu";

        const meta: Meta<typeof NavigationMenu> = {
          title: "Example/NavigationMenu",
          component: NavigationMenu,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof NavigationMenu>;

        export const Default: Story = {
          args: {},
        };
        