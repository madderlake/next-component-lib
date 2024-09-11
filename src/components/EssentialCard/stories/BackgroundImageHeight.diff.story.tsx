import type { Meta, StoryFn } from "@storybook/react";

import EssentialCardTemplate, {
  initialProps,
} from "@/components/EssentialCard/stories/Template";

import { EssentialCard } from "../EssentialCard";
import { HEIGHT_TEST_IMG_DATA } from "../imageData";

const meta: Meta<typeof EssentialCard> =  {
  title: "VisualDiffs/EssentialCard/BackgroundImageHeight",
  component: EssentialCard,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
export default meta;

const testImages = Object.values(HEIGHT_TEST_IMG_DATA);

// Scenario: Dimensions of Background Asset have no effect on height of Card (rdar://108923984)
export const BackgroundImageHeight: StoryFn = EssentialCardTemplate.bind({});
BackgroundImageHeight.args = {
  children: <EssentialCard {...initialProps} images={testImages} />,
};
