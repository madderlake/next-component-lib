import type { Meta, StoryFn } from "@storybook/react";

import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";
import { ProductTile } from "@/components/ProductTile/ProductTile";
import ProductTileTemplate, {
  initialProps,
} from "@/components/ProductTile/stories/Template";
import WithRtl from "@/lib/tests/WithRtl";

export default {
  title: "VisualDiffs/ProductTile/RTL",
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

const linkProps = {
  href: "#",
  children: "Buy",
  analytics: {
    "data-analytics-title": "",
  },
};

// Scenario: RTL layout renders correctly per design (rdar://109481816)
export const RTL: StoryFn = ProductTileTemplate.bind({});
RTL.args = {
  children: WithRtl(
    <ProductTile
      {...initialProps}
      badge="New"
      subHeading="This is a Sub Heading"
      secondaryCTA={linkProps}
      colorItems={colorItems}
      collapseBadges={false}
      collapseSubheads={false}
      collapseIndicators={false}
    />
  ),
};
