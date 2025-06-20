import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import type { ComponentProps } from "react";

import { Button } from "@/components/button/Button";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: "select",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: "select",
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
