import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/BodyCopy",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Card height increases as the amount of Body Copy increases
export const BodyCopy: StoryFn = EssentialCardTemplate.bind({});
BodyCopy.args = {
  children: (
    <EssentialCard
      {...initialProps}
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod felis vel justo facilisis sodales. Curabitur sed ultricies metus. Sed non lectus vel metus rhoncus gravida. Proin quis eros quis est semper pellentesque."
    />
  ),
};
