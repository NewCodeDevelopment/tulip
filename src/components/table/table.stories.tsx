
        import type { Meta, StoryObj } from "@storybook/react";
        import { Table } from "./table";

        const meta: Meta<typeof Table> = {
          title: "Example/Table",
          component: Table,
          tags: ["autodocs"],
          argTypes: {},
        };

        export default meta;

        type Story = StoryObj<typeof Table>;

        export const Default: Story = {
          args: {},
        };
        