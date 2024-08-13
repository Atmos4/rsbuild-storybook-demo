import type { StorybookConfig } from "storybook-react-rsbuild";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "storybook-react-rsbuild",
    options: {
      builder: {
        lazyCompilation: true,
      },
    },
  },
  docs: {
    defaultName: "Docs",
  },
  typescript: {
    reactDocgen: "react-docgen",
    check: true,
  },
  rsbuildFinal: (config) => {
    config.output ||= {};
    config.output.distPath = {
      image: ".",
      font: ".",
      svg: ".",
    };
    return config;
  },
} satisfies StorybookConfig;
