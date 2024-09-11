import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/Badge",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Badge is optional, and if not present space is not conserved (rdar://108923974)
export const Badge: StoryFn = EssentialCardTemplate.bind({});
Badge.args = {
  children: <EssentialCard {...initialProps} badge="Lorem" />,
};
