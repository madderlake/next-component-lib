import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";
import WithRtl from "@/lib/tests/WithRtl";

import { Select } from "../Select";

// Scenario: The section renders correctly in RTL. (rdar://110907496)
export default {
  title: "VisualDiffs/Moments/Select/RTL",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

export const RTL: StoryFn = Template.bind({});
const { items } = defaultProps;
RTL.args = {
  children: WithRtl(<Select {...defaultProps} items={[...items, ...items]} />),
};
