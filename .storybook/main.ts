import type { StorybookConfig } from "storybook-react-rsbuild";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "storybook-react-rsbuild",
    options: {
      legacyRootApi: false,
    },
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen",
    check: true,
  },
};

export default config;
