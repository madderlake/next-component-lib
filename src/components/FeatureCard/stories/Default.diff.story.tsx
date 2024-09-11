import type { Meta, StoryFn } from "@storybook/react";

import {
  initialProps,
  Template,
} from "@/components/FeatureCard/stories/Template";

import { FeatureCard } from "../FeatureCard";

export default {
  title: "VisualDiffs/FeatureCard/Default",
  component: FeatureCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof FeatureCard>;

// Scenario: Feature Card is required to have...(rdar://108808743)
// Scenario: Headline should truncate if there are more than five lines (rdar://108808745)
// Scenario: Feature Card is required to have a light theme (rdar://108808741)
// Scenario: Should have a responsive background asset (rdar://108808744)
export const Default: StoryFn = Template.bind({});
Default.args = {
  children: (
    <FeatureCard
      {...initialProps}
      headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      theme="light"
    />
  ),
};
