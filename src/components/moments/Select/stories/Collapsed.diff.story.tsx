import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";

import { Select, type SelectProps } from "../Select";

export default {
  title: "VisualDiffs/Moments/Select/Collapsed Space",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

const { title, items, analytics } = defaultProps;
// Scenario: Content that applies across all tiles ...( rdar://109481819)
export const CollapsedSpace: StoryFn = Template.bind({});
const reqdEls = items.map(
  ({ heading, copy, primaryCTA, analytics: itemAnalytics, images }) => ({
    heading,
    copy,
    primaryCTA,
    analytics: itemAnalytics,
    images,
  })
);
CollapsedSpace.args = {
  children: <Select items={reqdEls} title={title} analytics={analytics} />,
};
