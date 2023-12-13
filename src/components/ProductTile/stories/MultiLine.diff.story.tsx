import type { Meta, StoryFn } from "@storybook/react";

import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";

import { ProductTile } from "../ProductTile";

export default {
  title: "VisualDiffs/ProductTile/MultiLine",
  component: ProductTile,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
} satisfies Meta<typeof ProductTile>;

// Scenario: Header, Subheader and Pricing, if present, must be able to accommodate multiple lines of text. (rdar://110432483)
export const MultiLine: StoryFn = ProductTileTemplate.bind({});
MultiLine.args = {
  children: (
    <ProductTile
      {...initialProps}
      collapseSubheads={false}
      heading="iProduct Long Name that takes up Multiple Lines"
      subHeading="A Long subheading that takes up Multiple Lines"
      pricing="From $599 or $49.91/mo for 12 mo.* or maybe from $699 or $XX.XX/mo."
    />
  ),
};
