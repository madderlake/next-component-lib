import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";

import { Select } from "../Select";

export default {
  title: "VisualDiffs/Moments/Select/NoBottomPadding",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

const { title, items } = defaultProps;

// Scenario: The section can be rendered without bottom padding. (rdar://110907262)

export const NoBottomPadding: StoryFn = Template.bind({});
const reqdEls = items.map(
  ({ heading, copy, primaryCTA, analytics, images }) => ({
    heading,
    copy,
    primaryCTA,
    analytics,
    images,
  })
);

NoBottomPadding.args = {
  children: (
    <div style={{ border: "10px solid red" }}>
      <Select
        {...defaultProps}
        items={reqdEls}
        title={title}
        noBottomPadding={true}
      />
    </div>
  ),
};
