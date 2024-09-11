import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/Default",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Header, Body Copy, Link, and Background Asset are required (radar://108923979)
// Scenario: Badge is optional, and if not present space is not conserved (rdar://108923974)
export const Default: StoryFn = EssentialCardTemplate.bind({});
Default.args = {
  children: <EssentialCard {...initialProps} />,
};
