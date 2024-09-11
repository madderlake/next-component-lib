import type { Meta, StoryFn } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";

import {
  initialProps,
  Template,
} from "@/components/FeatureCard/stories/Template";

import { FeatureCard } from "../FeatureCard";

export default {
  title: "VisualDiffs/FeatureCard/FocusOutline",
  component: FeatureCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  play: async () => {
    await userEvent.tab();
  },
} satisfies Meta<typeof FeatureCard>;

// Scenario: Feature Card has a focus outline... (rdar://108808749)
export const FocusOutline: StoryFn = Template.bind({});
FocusOutline.args = {
  children: <FeatureCard {...initialProps} />,
};
