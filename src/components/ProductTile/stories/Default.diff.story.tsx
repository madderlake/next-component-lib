import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Default",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: ProductTile is required to have... (rdar://109481822)
// Scenario: If no link is present, button is center aligned. (rdar://110433431)
export const Default: StoryFn = ProductTileTemplate.bind({});
Default.args = {
  children: <ProductTile {...initialProps} />,
};
