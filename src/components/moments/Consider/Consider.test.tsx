/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import "@testing-library/jest-dom";
import React from "react";

import type { RenderResult } from "@testing-library/react";
import { act, cleanup, render } from "@testing-library/react";
import { QueryStringProvider } from "../../../contexts/QueryStringContext/QueryStringProvider";
import { useQueryStringAdapterMock } from "../../../layouts/utils/useQueryStringAdapterMock";


import { Consider } from "./Consider";
import { CONSIDER_MOMENT_DATA } from "./Consider.data";

const TestableConsiderSection = () => {
  const qsAdapter = useQueryStringAdapterMock();
  const MOCK_DATA = {
    ...CONSIDER_MOMENT_DATA,
    analytics: {
      "data-analytics-section-engagement": "test section engagement",
      "data-analytics-region": "test consider region",
      "data-analytics-gallery-id": "test-consider-gallery",
    },
  };
  return (
    <QueryStringProvider adapter={qsAdapter}>
      <Consider {...MOCK_DATA} />
    </QueryStringProvider>);
};

describe("Consider Section", () => {
  let renderResult: RenderResult;

  beforeEach(async () => {
    await act(async () => {
      renderResult = await render(<TestableConsiderSection />);
    });
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    afterAll(() => {
      cleanup();
    });

    // Scenario: Section engagement tracking on the Consider Section (rdar://113637736)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test section engagement");
    });

    // Scenario: Optional Region tracking on the Consider Section (rdar://113637946)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test consider region"
      );
    });

    // Scenario: Gallery tracking on the Consider Section (rdar://113638043)
    it("should have gallery analytics", () => {
      const { container } = renderResult;
      const galleryRootDiv = container.querySelector(".gallery");

      if (galleryRootDiv === null) {
        fail("Gallery not found");
      }

      expect(galleryRootDiv.getAttribute("data-analytics-gallery-id")).toBe(
        "test-consider-gallery"
      );

      const galleryItems =
        galleryRootDiv.querySelector(".itemContainer")?.children;

      if (galleryItems === undefined) {
        fail("Gallery items not found");
      }

      Array.from(galleryItems).forEach((galleryItem, i) => {
        expect(galleryItem.getAttribute("data-analytics-gallery-item-id")).toBe(
          CONSIDER_MOMENT_DATA.items[i].analytics[
            "data-analytics-gallery-item-id"
          ]
        );

        // Assert that there are no children components at the deeper level with the gallery item id
        expect(
          galleryItem.querySelector("[data-analytics-gallery-item-id]")?.tagName
        ).toBeUndefined();
      });
    });
  });
});
