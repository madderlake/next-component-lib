import type { Meta, StoryFn } from "@storybook/react";

import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import { DARK_IMG_DATA } from "@/components/FeatureCard/imageData";
import {
  initialProps,
  Template,
} from "@/components/FeatureCard/stories/Template";
import styles from "@/components/ModalCard/ModalCard.module.scss";

export default {
  title: "VisualDiffs/FeatureCard/HoverControl",
  component: FeatureCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof FeatureCard>;

const darkImages = Object.values(DARK_IMG_DATA);

// Scenario: Control has a styled hover state - light theme (rdar://108808751)
export const LightTheme: StoryFn = Template.bind({});
LightTheme.args = {
  children: <FeatureCard {...initialProps} theme="light" />,
};

LightTheme.parameters = {
  pseudo: { hover: [`.${styles.control}`] },
};

// Scenario: Control has a styled hover state - dark theme (rdar://108808751)
export const DarkTheme: StoryFn = Template.bind({});
DarkTheme.args = {
  children: <FeatureCard {...initialProps} images={darkImages} theme="dark" />,
};
DarkTheme.parameters = {
  pseudo: { hover: [`.${styles.control}`] },
};
