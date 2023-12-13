import type { Meta, StoryFn } from "@storybook/react";

import type { ImageAccordionProps } from "../ImageAccordion";
import { ImageAccordion } from "../ImageAccordion";
import { items } from "../itemData";
import { Template } from "./Template";

export default {
  title: "VisualDiffs/ImageAccordion/Default",
  component: ImageAccordion,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ImageAccordion>;

// Scenario: The Accordion item content should display the image within the content panel... (rdar://108963464)
// Scenario: Accordion items require a button with headline and icon, and a content area     (rdar://108963465)
// Scenario: ImageAccordion image is cropped if/when it hits the leading edge on viewport... (rdar://108963468)
// Scenario: Image will be displayed in the image container (rdar://108963466)
export const Default: StoryFn<ImageAccordionProps> = Template.bind({});
Default.args = {
  items,
};
