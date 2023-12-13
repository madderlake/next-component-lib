import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { ColorIndicatorProps } from "./ColorIndicator";
import { ColorIndicator } from "./ColorIndicator";

export default {
  title: "components/ColorIndicator",
  component: ColorIndicator,
} satisfies Meta<typeof ColorIndicator>;

const items: ColorIndicatorProps["items"] = [
  {
    type: "swatch",
    color: "lightgrey",
    name: "Light Gray",
  },
  {
    type: "swatch",
    color: "pink",
    name: "Pinky",
  },
  {
    type: "swatch",
    color: "purple",
    name: "Purple",
  },
  {
    type: "swatch",
    color: "red",
    name: "Red",
  },
  // {
  //   type: "picture",
  //   src: "https://standards.apple.com/element-library/assets/patterns/colorindicator/rainbow-swatch.png",
  //   alt: "Rainbow",
  // },
  {
    type: "label",
    text: "+4 more",
  },
];

const Template: StoryFn<ColorIndicatorProps> = (args) => (
  <div style={{ padding: "1rem" }}>
    <ColorIndicator {...args} />
  </div>
);

export const InteractiveExample: StoryFn<ColorIndicatorProps> = Template.bind(
  {}
);
InteractiveExample.args = {
  ariaLabel: "Storybook Colors",
  items,
};
InteractiveExample.storyName = "ColorIndicator";
