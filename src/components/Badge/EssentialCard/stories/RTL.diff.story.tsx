import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";
import WithRtl from "@/lib/tests/WithRtl";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/RTL",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: RTL reverses Violator, Header, Body Copy, Link, and Link icon (radar://108923973)
export const RTL: StoryFn = EssentialCardTemplate.bind({});
RTL.args = {
  children: WithRtl(
    <EssentialCard
      {...initialProps}
      badge="New"
      imagePinning="center"
      textPosition="top"
    />
  ),
};
