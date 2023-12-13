import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Badge",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: ProductTile optionally has a Badge (rdar://109687297)
export const Badge: StoryFn = ProductTileTemplate.bind({});
Badge.args = {
  children: (
    <ProductTile {...initialProps} badge="New" collapseBadges={false} />
  ),
};
