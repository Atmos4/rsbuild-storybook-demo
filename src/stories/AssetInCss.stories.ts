import { Meta, StoryObj } from "@storybook/react";
import { AssetInCss } from "./AssetInCss";

export default {
  title: "Example/AssetInCss",
  component: AssetInCss,
} satisfies Meta<typeof AssetInCss>;

export const Default: StoryObj<typeof AssetInCss> = {
  args: {
    children: "Hello world",
  },
};
