import type { Meta, StoryFn } from "@storybook/react";

import { IconCard, type IconCardProps } from "../IconCard";
import { Template } from "./Template";

export default {
  title: "VisualDiffs/IconCard/Default",
  component: IconCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof IconCard>;

// Scenario: Icon Card default state requires an Icon, Headline, Body Copy, Control & Card (rdar://109722882)
export const Default: StoryFn<IconCardProps> = Template.bind({});
Default.args = {
  icon: {
    src: "/assets/icons/light/line.horizontal.2.decrease.circle_elevated_1D1D1F.svg",
    width: 40,
    height: 56,
  },
  headline: "Save up to $655 with Trade In",
  copy: "Get credit toward your next iPad when you trade in your current one.",
  accessibilityText: "accessibility text",
};
