import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Pricing",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: ProductTile optionally has an element for Pricing or fallback information (rdar://110432249)
export const Pricing: StoryFn = ProductTileTemplate.bind({});
Pricing.args = {
  children: (
    <ProductTile
      {...initialProps}
      pricing="From $799 or $66.58/mo. for 12 mo.*"
    />
  ),
};
