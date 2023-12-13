import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import { IMAGE_DATA } from "@/components/ProductTile/imageData";

import type { ProductTileProps } from "./ProductTile";
import { ProductTile } from "./ProductTile";

// eslint-disable-next-line max-lines-per-function
describe("ProductTile", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    const props: ProductTileProps = {
      heading: "test heading",
      copy: "test copy",
      pricing: "test pricing",
      images: Object.values(IMAGE_DATA.iPadPro),
      colorItems: [
        { type: "swatch", color: "lightgrey", name: "Silver" },
        { type: "swatch", color: "darkgrey", name: "Graphite" },
      ],
      primaryCTA: {
        children: "test primary",
        href: "#",
        analytics: {
          "data-analytics-title": "test primary title",
        },
      },
      secondaryCTA: {
        children: "test secondary",
        href: "#",
        analytics: {
          "data-analytics-title": "test secondary title",
          "data-analytics-exit-link": true,
        },
      },
      analytics: {
        "data-analytics-activitymap-region-id": "test: ipad air",
      },
    };

    renderResult = render(
      <ProductTile {...props}>Sample ProductTile</ProductTile>
    );
  });

  afterAll(() => {
    cleanup();
  });

  // Scenario: Region tracking on tile (rdar://110034198)
  describe("Analytics", () => {
    it("should have activitymap-region", () => {
      const { container } = renderResult;

      const productTile = container.querySelector(
        "[data-analytics-activitymap-region-id]"
      );

      expect(productTile).toBeInTheDocument();

      expect(
        productTile?.getAttribute("data-analytics-activitymap-region-id")
      ).toBe("test: ipad air");
    });

    it("should have analytics-title on base link", () => {
      const { container } = renderResult;

      const baseLink = container.querySelector(".contentLink");

      expect(baseLink).toHaveAttribute("data-analytics-title");

      expect(baseLink?.getAttribute("data-analytics-title")).toEqual(
        "test primary title"
      );
    });

    it("should have analytics-title on primary link", () => {
      const { container } = renderResult;

      const primaryLink = container.querySelector(".contentLink");

      expect(primaryLink).toHaveAttribute("data-analytics-title");

      expect(primaryLink?.getAttribute("data-analytics-title")).toEqual(
        "test primary title"
      );
    });

    it("should have analytics-title on secondary link", () => {
      const { container } = renderResult;

      const buyLink = container.querySelector(".buyLink");

      expect(buyLink).toHaveAttribute("data-analytics-title");

      expect(buyLink?.getAttribute("data-analytics-title")).toEqual(
        "test secondary title"
      );
    });
  });
});
