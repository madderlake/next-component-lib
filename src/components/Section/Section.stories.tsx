import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { SectionProps } from "./Section";
import { Section } from "./Section";

export default {
  title: "components/Section",
  component: Section,
} satisfies Meta<typeof Section>;

const Template: StoryFn<SectionProps> = (props) => (
  <Section {...props}></Section>
);

export const Example: StoryFn = Template.bind({});
Example.storyName = "Section";
Example.args = {
  children: `Get things done easily.\nOrganize effortlessly.`,
  analytics: {
    "data-analytics-section-engagement": "name: sample section",
    "data-analytics-region": "sample section",
  },
};
