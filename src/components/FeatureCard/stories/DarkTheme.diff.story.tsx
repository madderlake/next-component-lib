import type { Meta, StoryFn } from "@storybook/react";

import { DARK_IMG_DATA } from "@/components/FeatureCard/imageData";
import {
  initialProps,
  Template,
} from "@/components/FeatureCard/stories/Template";

import { FeatureCard } from "../FeatureCard";

export default {
  title: "VisualDiffs/FeatureCard/DarkTheme",
  component: FeatureCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof FeatureCard>;

const darkImages = Object.values(DARK_IMG_DATA);

// Scenario: Feature Card is required to have a dark theme (rdar://108808748)
export const DarkTheme: StoryFn = Template.bind({});
DarkTheme.args = {
  children: (
    <FeatureCard
      {...initialProps}
      images={darkImages}
      theme="dark"
      objectPosition="center center"
      imgAlt="img alt"
    />
  ),
};
