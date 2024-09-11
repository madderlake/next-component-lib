import type { Meta, StoryFn } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";

import { IconCard, type IconCardProps } from "../IconCard";
import { Template } from "./Template";

export default {
  title: "VisualDiffs/IconCard/FocusOutline",
  component: IconCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  play: async () => {
    await userEvent.tab();
  },
} satisfies Meta<typeof IconCard>;

// Scenario: Focus outlines have correct appearance (rdar://112674459)
export const FocusOutline: StoryFn<IconCardProps> = Template.bind({});
FocusOutline.args = {
  icon: {
    src: "/assets/icons/light/line.horizontal.2.decrease.circle_elevated_1D1D1F.svg",
    width: 40,
    height: 56,
  },
  headline: "Save up to $655 with Trade In",
  copy: "Get credit toward your next iPad when you trade in your current one.",
  accessibilityText: "accessibility text",
};
