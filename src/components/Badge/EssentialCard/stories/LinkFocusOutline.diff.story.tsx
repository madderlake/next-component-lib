import type { Meta, StoryFn } from "@storybook/react";
import { userEvent } from "@storybook/testing-library";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

export default {
  title: "VisualDiffs/EssentialCard/LinkFocusOutline",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  play: async () => {
    await userEvent.tab();
  },
} satisfies Meta<typeof EssentialCard>;

// Link has styled focus outline (rdar://108923978)
export const LinkFocusOutline: StoryFn = EssentialCardTemplate.bind({});
LinkFocusOutline.args = {
  children: <EssentialCard {...initialProps} />,
};
