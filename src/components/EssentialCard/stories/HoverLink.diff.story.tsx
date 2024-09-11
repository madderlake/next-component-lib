import type { Meta, StoryFn } from "@storybook/react";

import styles from "@/components/EssentialCard/EssentialCard.module.scss";
import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/HoverLink",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Link has a styled hover state (rdar://108923981)
export const HoverLink: StoryFn = EssentialCardTemplate.bind({});
HoverLink.args = {
  children: <EssentialCard {...initialProps} />,
};
HoverLink.parameters = { pseudo: { hover: [`.${styles.link}`] } };
