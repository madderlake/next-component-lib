import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/CardWidth",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Card width is controlled by the width of the parent container (rdar://108923982)
export const CardWidth: StoryFn = EssentialCardTemplate.bind({});
CardWidth.args = {
  children: <EssentialCard {...initialProps} />,
};
CardWidth.decorators = [
  (StoryFn) => (
    <div style={{ width: "500px" }}>
      <StoryFn />
    </div>
  ),
];
