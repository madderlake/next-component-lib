import type { Meta, StoryFn } from "@storybook/react";

import {
  initialProps,
  Template,
} from "@/components/FeatureCard/stories/Template";
import WithRtl from "@/lib/tests/WithRtl";

import { FeatureCard } from "../FeatureCard";

export default {
  title: "VisualDiffs/FeatureCard/RTL",
  component: FeatureCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof FeatureCard>;

// Scenario: Feature Card responds accordingly to RTL (rdar://108808746)
export const RTL: StoryFn = Template.bind({});
RTL.args = {
  children: WithRtl(
    <FeatureCard
      {...initialProps}
      headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      theme="light"
    />
  ),
};
