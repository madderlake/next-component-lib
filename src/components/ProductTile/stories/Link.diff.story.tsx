import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Link",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: ProductTile optionally has a link. (rdar://110432375)
export const Link: StoryFn = ProductTileTemplate.bind({});
Link.args = {
  children: (
    <ProductTile
      {...initialProps}
      pricing="From $799 or $66.58/mo. for 12 mo.*"
      secondaryCTA={{
        children: "Buy",
        href: "#",
        analytics: { "data-analytics-title": "ipad air buy" },
      }}
    />
  ),
};
