import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/Subheader",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: ProductTile optionally has a Subheader (rdar://109687381)
export const Subheader: StoryFn = ProductTileTemplate.bind({});
Subheader.args = {
  children: (
    <ProductTile
      {...initialProps}
      subHeading="This is a Sub Heading"
      collapseSubheads={false}
    />
  ),
};
