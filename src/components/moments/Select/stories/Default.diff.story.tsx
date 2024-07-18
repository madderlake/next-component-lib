import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";

import { Select } from "../Select";

export default {
  title: "VisualDiffs/Moments/Select/Default",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

const { title, items, analytics } = defaultProps;

// Scenario: A Section Header and gallery of Product tiles are required. (rdar://110907186)
// Scenario: The set is required to have a minimum of two tiles. (rdar://110907614)

export const Default: StoryFn = Template.bind({});
const reqdEls = items.map(
  ({ heading, copy, primaryCTA, analytics: itemAnalytics, images }) => ({
    heading,
    copy,
    primaryCTA,
    analytics: itemAnalytics,
    images,
  })
);
Default.args = {
  children: <Select title={title} items={reqdEls} analytics={analytics} />,
};
