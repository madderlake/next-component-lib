import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { SectionHeaderProps } from "./SectionHeader";
import { SectionHeader } from "./SectionHeader";

export default {
  title: "components/SectionHeader",
  component: SectionHeader,
  argTypes: {
    title: {
      type: "string",
    },
  },
} satisfies Meta<typeof SectionHeader>;

const Template: StoryFn<SectionHeaderProps> = (props) => {
  return <SectionHeader {...props} />;
};

export const Example: StoryFn<SectionHeaderProps> = Template.bind({});
Example.storyName = "SectionHeader";
Example.args = {
  title: "Section Header",
  link: {
    children: "This is a link about something",
    href: "#",
    icon: "more",
    position: "after",
    analytics: {
      "data-analytics-title": "section-header",
    },
  },
};
