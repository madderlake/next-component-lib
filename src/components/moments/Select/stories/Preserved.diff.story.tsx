import type { Meta, StoryFn } from "@storybook/react";

import Template, {
  defaultProps,
} from "@/components/moments/Select/stories/Template";

import { Select } from "../Select";

export default {
  title: "VisualDiffs/Moments/Select/Preserved Space",
  component: Select,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof Select>;

export const PreservedSpace: StoryFn = Template.bind({});

// Scenario: Content that varies between tiles. (rdar://109481823)
PreservedSpace.args = {
  children: <Select {...defaultProps} />,
};
