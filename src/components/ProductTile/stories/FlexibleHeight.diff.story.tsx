import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Flexible Height",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: Scenario: ProductTile height is flexible... (rdar://109481814)
export const FlexibleHeight: StoryFn = ProductTileTemplate.bind({});
FlexibleHeight.args = {
  children: (
    <ProductTile
      {...initialProps}
      copy="This is to check if height of product tile is flexible. This is to check if height of product tile is flexible. This is to check if height of product tile is flexible."
    />
  ),
};
