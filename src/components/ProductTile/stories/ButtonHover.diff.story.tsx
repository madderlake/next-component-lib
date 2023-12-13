import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Button Hover",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: Button has a hover state (rdar://109481813)
export const ButtonHover: StoryFn = ProductTileTemplate.bind({});
ButtonHover.args = {
  children: <ProductTile {...initialProps} />,
};
ButtonHover.parameters = { pseudo: { hover: true } };
