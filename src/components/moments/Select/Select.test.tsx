/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { act, cleanup, render } from "@testing-library/react";
import React from "react";

import { Select, type SelectProps } from "./Select";
import { SELECT_MOMENT_PROPS } from "./Select.data";

describe("Select Section", () => {
  describe("Analytics", () => {
    let renderResult: RenderResult;

    beforeEach(async () => {
      await act(async () => {
        const MOCK_DATA: SelectProps = {
          ...SELECT_MOMENT_PROPS,
          analytics: {
            "data-analytics-section-engagement": "test section engagement",
            "data-analytics-region": "test select region",
            "data-analytics-gallery-id": "test-select-gallery",
          },
          sectionHeaderLink: {
            children: "Section Header Link",
            href: "#",
            analytics: {
              "data-analytics-title": "test-section-header-link",
            },
          },
        };
        renderResult = await render(<Select {...MOCK_DATA} />);
      });
    });

    afterAll(() => {
      cleanup();
    });

    // Scenario: Section engagement tracking on the Select Section (rdar://113585757)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test section engagement");
    });

    // Scenario: Optional Region tracking on the Select Section (rdar://113586337)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test select region"
      );
    });

    // Scenario: Link tracking on Section Header on the Select Section (rdar://113586682)
    it("should have link tracking in section header", async () => {
      const sectionHeaderLink = (
        await renderResult.findByText("Section Header Link")
      ).closest("a");

      expect(sectionHeaderLink?.getAttribute("data-analytics-title")).toBe(
        "test-section-header-link"
      );
    });

    // Scenario: Gallery tracking on the Select Section (rdar://113586968)
    it("should have gallery analytics", () => {
      const { container } = renderResult;
      const galleryRootDiv = container.querySelector(".gallery");

      expect(galleryRootDiv?.getAttribute("data-analytics-gallery-id")).toBe(
        "test-select-gallery"
      );

      const galleryItems =
        galleryRootDiv?.querySelector(".itemContainer")?.children;

      if (galleryItems === undefined) {
        throw new Error("Gallery items not found");
      }

      Array.from(galleryItems).forEach((galleryItem, i) => {
        expect(galleryItem.getAttribute("data-analytics-gallery-item-id")).toBe(
          SELECT_MOMENT_PROPS.items[i].analytics[
            "data-analytics-gallery-item-id"
          ]
        );

        // Assert that there are no children components at the deeper level with the gallery item id
        expect(
          galleryItem.querySelector("[data-analytics-gallery-item-id]")?.tagName
        ).toBeUndefined();
      });
    });

    // Scenario: ActivityMap Region tracking in Product Tiles on the Select Section (rdar://113587241)
    it("should have activity map region tracking in product tiles", () => {
      const { container } = renderResult;
      const galleryRootDiv = container.querySelector(".gallery");

      const productTiles = galleryRootDiv?.querySelectorAll(".productTile");
      productTiles?.forEach((productTile, i) => {
        expect(
          productTile.getAttribute("data-analytics-activitymap-region-id")
        ).toBe(
          SELECT_MOMENT_PROPS.items[i].analytics[
            "data-analytics-activitymap-region-id"
          ]
        );
      });
    });

    // Scenario: Link tracking on Product Tile CTAs on the Select Section (rdar://113587429)
    it("should have link tracking on product tile CTAs", () => {
      const { container } = renderResult;
      const galleryRootDiv = container.querySelector(".gallery");

      const contentLinks = galleryRootDiv?.querySelectorAll(".contentLink");
      contentLinks?.forEach((contentLink, i) => {
        expect(contentLink.getAttribute("data-analytics-title")).toBe(
          SELECT_MOMENT_PROPS.items[i].primaryCTA.analytics[
            "data-analytics-title"
          ]
        );
      });

      const ctaWrappers = galleryRootDiv?.querySelectorAll(".tileFooter");
      ctaWrappers?.forEach((ctaWrapper, i) => {
        const ctas = ctaWrapper.querySelectorAll("a");
        const primaryCTA = ctas[0];
        const secondaryCTA = ctas[1];

        expect(primaryCTA.getAttribute("data-analytics-title")).toBe(
          SELECT_MOMENT_PROPS.items[i].primaryCTA.analytics[
            "data-analytics-title"
          ]
        );

        expect(secondaryCTA ? secondaryCTA.getAttribute("data-analytics-title") : undefined).toBe(
          SELECT_MOMENT_PROPS.items[i].secondaryCTA?.analytics[
            "data-analytics-title"
            ]
        );
      })
    });
  });
});
