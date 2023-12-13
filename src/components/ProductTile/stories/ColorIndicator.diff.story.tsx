import type { Meta, StoryFn } from "@storybook/react";

import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";
import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Color Indicator",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

const colorItems: ColorIndicatorProps["items"] = [
  {
    type: "swatch",
    color: "lightgrey",
    name: "Silver",
  },
  {
    type: "swatch",
    color: "darkgrey",
    name: "Graphite",
  },
  {
    type: "swatch",
    color: "purple",
    name: "Deep purple",
  },
];

// Scenario: ProductTile optionally has a Color Indicator (rdar://109687179)
export const ColorIndicator: StoryFn = ProductTileTemplate.bind({});
ColorIndicator.args = {
  children: (
    <ProductTile
      {...initialProps}
      colorItems={colorItems}
      collapseIndicators={false}
    />
  ),
};
