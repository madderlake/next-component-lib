import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { ColorIndicatorProps } from "@/components/ColorIndicator/ColorIndicator";
import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
// import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

import { IMAGE_DATA } from "./imageData";
import type { ProductTileProps } from "./ProductTile";
import { ProductTile } from "./ProductTile";

export default {
  title: "components/ProductTile",
  component: ProductTile,
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

const initialProps: ProductTileProps = {
  heading: `iPad Air`,
  badge: "New",
  copy: "Powerful features packed into a portable all-screen design.",
  pricing: "From $599 or $49.91/mo.\nfor 12 mo.*",
  primaryCTA: {
    children: "Learn More",
    href: "#",
    analytics: { "data-analytics-title": "ipad air learn more" },
    ariaLabel: "primary cta",
  },
  secondaryCTA: {
    children: "Buy",
    href: "#",
    analytics: { "data-analytics-title": "ipad air learn more" },
    ariaLabel: "secondary cta",
  },
  images: Object.values(IMAGE_DATA.iPadAir),
  imageAltText: "Product Image",
  colorItems,
  analytics: {
    "data-analytics-activitymap-region-id": "ipad air",
  },
};

const Template: StoryFn<ProductTileProps> = (args) => {
  const containerRef = React.useRef(null);

  return (
    // <SassKitViewportsProvider sassData={sassData}>
    <LoadImagesProvider containerRef={containerRef}>
      <div
        ref={containerRef}
        style={{
          paddingTop: "2rem",
          height: "100vh",
          backgroundColor: args.theme === "light" ? "#F5F5F7" : "#000",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ProductTile {...args} />
      </div>
    </LoadImagesProvider>
    // </SassKitViewportsProvider>
  );
};

export const InteractiveExample: StoryFn<ProductTileProps> = Template.bind({});

InteractiveExample.args = { ...initialProps, theme: "light" };
InteractiveExample.storyName = "ProductTile";
InteractiveExample.argTypes = {
  layout: { table: { disable: true } },
  objectPosition: { table: { disable: true } },
  objectFit: { table: { disable: true } },
  collapseIndicators: { table: { disable: true } },
};

InteractiveExample.parameters = {
  specUrl:
    "https://pages.github.pie.apple.com/marcom-frontend/collections-specs/product-tile/",
  sourceCodeUrl:
    "https://interactive-git.apple.com/interactive-rome/ipad/tree/develop/components/ProductTile",
};
