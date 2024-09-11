import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { PageHeaderProps } from "./PageHeader";
import { PageHeader } from "./PageHeader";

export default {
  title: "components/PageHeader",
  component: PageHeader,
  argTypes: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
} satisfies Meta<typeof PageHeader>;

const Template: StoryFn<PageHeaderProps> = (props) => {
  return <PageHeader {...props} />;
};

export const Example: StoryFn<PageHeaderProps> = Template.bind({});
Example.storyName = "PageHeader";
Example.args = {
  title: "Title",
  description: "Description lorem ullamcorer ipsum dolor.",
};
