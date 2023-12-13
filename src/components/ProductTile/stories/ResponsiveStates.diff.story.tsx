import type { Meta, StoryFn } from "@storybook/react";

import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";

import { ProductTile } from "../ProductTile";
import ProductTileTemplate, { initialProps } from "./Template";

export default {
  title: "VisualDiffs/ProductTile/AllElements",
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
];

const linkProps = {
  href: "#",
  children: "Buy",
  analytics: {
    "data-analytics-title": "",
  },
};

// Scenario: ProductTile elements are center aligned (rdar://109481820)
// Scenario: ProductTile elements are aligned to the left (rdar://109481821)
export const AllElements: StoryFn = ProductTileTemplate.bind({});
AllElements.args = {
  children: (
    <ProductTile
      {...initialProps}
      badge="New"
      subHeading="This is a Sub Heading"
      colorItems={colorItems}
      collapseBadges={false}
      collapseIndicators={false}
      collapseSubheads={false}
      secondaryCTA={linkProps}
    />
  ),
};
