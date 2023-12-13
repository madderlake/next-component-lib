import type { StoryFn } from "@storybook/react";
import type { PropsWithChildren } from "react";
import React from "react";

import { IMAGE_DATA } from "@/components/ProductTile/imageData";
import type { ProductTileProps } from "@/components/ProductTile/ProductTile";
import { LoadImagesProvider } from "@/contexts/LoadImages/LoadImagesProvider";
import { SassKitViewportsProvider } from "@/contexts/Viewport/SassKitViewportsProvider";
import sassData from "@/styles/shared/sasskitData.module.scss";

export const initialProps: ProductTileProps = {
  collapseBadges: true,
  collapseIndicators: true,
  collapseSubheads: true,
  heading: `iPad Air`,
  copy: "Powerful features packed into a portable all-screen design.",
  primaryCTA: {
    children: "Learn More",
    href: "#",
    analytics: { "data-analytics-title": "ipad air learn more" },
  },
  colorItems: [],
  images: Object.values(IMAGE_DATA.iPadAir),
  imageAltText: "Product Image",
  analytics: {
    "data-analytics-activitymap-region-id": "ipad air",
  },
};

const ProductTileTemplate: StoryFn<PropsWithChildren> = (args) => {
  const containerRef = React.useRef(null);

  return (
    <SassKitViewportsProvider sassData={sassData}>
      <LoadImagesProvider containerRef={containerRef}>
        <div
          ref={containerRef}
          style={{
            paddingTop: "2rem",
            height: "100vh",
            backgroundColor: "#F5F5F7",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {args.children}
        </div>
      </LoadImagesProvider>
    </SassKitViewportsProvider>
  );
};

export default ProductTileTemplate;
