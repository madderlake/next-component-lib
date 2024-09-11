import type { Meta, StoryObj } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";

import { KEYBOARD_IMG_DATA } from "../imageData";

export default {
  title: "VisualDiffs/EssentialCard/TextAlignment",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} as Meta<typeof EssentialCard>;

const keyboardImages = Object.values(KEYBOARD_IMG_DATA);

// # rdar://108923980 Scenario: Each Essential Card may have the text aligned to the top or bottom
export const Top = EssentialCardTemplate.bind({});
Top.args = {
  children: <EssentialCard {...initialProps} textPosition="top" />,
};

// # rdar://108923980 Scenario: Each Essential Card may have the text aligned to the top or bottom
export const Bottom = EssentialCardTemplate.bind({});
Bottom.args = {
  children: <EssentialCard {...initialProps} images={keyboardImages} textPosition="bottom" />,
};
