import type { Meta, StoryFn } from "@storybook/react";

import styles from "@/components/EssentialCard/EssentialCard.module.scss";
import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/HoverCard",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof EssentialCard>;

// Scenario: Card has a styled hover state (rdar://108923975)
export const HoverCard: StoryFn = EssentialCardTemplate.bind({});
HoverCard.args = {
  children: <EssentialCard {...initialProps} />,
};
HoverCard.parameters = { pseudo: { hover: [`.${styles.essentialCard}`] } };
