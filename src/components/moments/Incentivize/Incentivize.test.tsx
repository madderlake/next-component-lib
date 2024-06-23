/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { act, cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Incentivize } from "./Incentivize";
import { INCENTIVIZE_MOMENT_DATA } from "./Incentivize.data";

describe("Incentivize Section", () => {
  describe("Analytics", () => {
    let renderResult: RenderResult;

    beforeEach(async () => {
      await act(async () => {
        const MOCK_DATA = {
          ...INCENTIVIZE_MOMENT_DATA,
          analytics: {
            "data-analytics-section-engagement": "test section engagement",
            "data-analytics-region": "test incentivize region",
            "data-analytics-gallery-id": "test-incentivize-gallery",
          },
          sectionHeaderLink: {
            children: "Section Header Link",
            href: "#",
            analytics: {
              "data-analytics-title": "test-section-header-link",
            },
          },
        };
        renderResult = await render(<Incentivize {...MOCK_DATA} />);
      });
    });

    afterAll(() => {
      cleanup();
    });

    // Scenario: Section engagement tracking on the Incentivize Section (rdar://113414604)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test section engagement");
    });

    // Scenario: Optional Region tracking on the Incentivize Section (rdar://113589056)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test incentivize region"
      );
    });

    // Scenario: Link tracking on Section Header on the Incentivize Section (rdar://113414969)
    it("should have analytics in section header link", async () => {
      const sectionHeaderLink = (
        await renderResult.findByText("Section Header Link")
      ).closest("a");

      expect(sectionHeaderLink?.getAttribute("data-analytics-title")).toBe(
        "test-section-header-link"
      );
    });

    // Scenario: Click tracking on each ModalCard on the Incentivize Section (rdar://112106494)
    it("should have click analytics on each ModalCard", () => {
      const { container } = renderResult;
      const gallery = container.querySelector(
        '[data-analytics-gallery-id="test-incentivize-gallery"]'
      );
      const modalCards = gallery?.querySelectorAll(
        "li [data-analytics-gallery-item-id]"
      );

      modalCards?.forEach((modalCard, i) => {
        expect(
          modalCard.querySelector("a")?.getAttribute("data-analytics-click")
        ).toEqual(
          INCENTIVIZE_MOMENT_DATA.items[i].analytics["data-analytics-click"]
        );
        expect(
          modalCard.querySelector("a")?.getAttribute("data-analytics-title")
        ).toEqual(
          INCENTIVIZE_MOMENT_DATA.items[i].analytics["data-analytics-title"]
        );
      });
    });

    // Scenario: Gallery tracking on the Incentivize Section (rdar://113415357)
    it("should have gallery analytics", () => {
      const { container } = renderResult;
      const galleryRootDiv = container.querySelector(".gallery");

      if (galleryRootDiv === null) {
        fail("Gallery not found");
      }

      expect(galleryRootDiv.getAttribute("data-analytics-gallery-id")).toBe(
        "test-incentivize-gallery"
      );

      const galleryItems =
        galleryRootDiv.querySelector(".itemContainer")?.children;

      if (galleryItems === undefined) {
        fail("Gallery items not found");
      }

      Array.from(galleryItems).forEach((galleryItem, i) => {
        expect(galleryItem.getAttribute("data-analytics-gallery-item-id")).toBe(
          INCENTIVIZE_MOMENT_DATA.items[i].analytics[
            "data-analytics-gallery-item-id"
          ]
        );

        // Assert that there are no children components at the deeper level with the gallery item id
        expect(
          galleryItem.querySelector("[data-analytics-gallery-item-id]")?.tagName
        ).toBeUndefined();
      });
    });

    // Scenario: Click tracking on close button in any variant of the IconCard Modal on the Incentivize Section (rdar://112106435)
    it("should have click tracking on close button any variant of the icon card modal", async () => {
      const { container } = renderResult;
      const gallery = container.querySelector(
        '[data-analytics-gallery-id="test-incentivize-gallery"]'
      );
      const modalCard = gallery?.querySelector("a[data-analytics-click]");

      if (modalCard === null || modalCard === undefined) {
        throw new Error("ModalCard not found");
      }

      await userEvent.click(modalCard);

      if (INCENTIVIZE_MOMENT_DATA.items[0].modalContent.analytics === undefined) {
        throw new Error("Modal content data is missing analytics");
      }

      const modalActivityMapRegionId = INCENTIVIZE_MOMENT_DATA.items[0].modalContent.analytics["data-analytics-activitymap-region-id"];
      const modalCloseButtonTitle = INCENTIVIZE_MOMENT_DATA.items[0].modalContent.analytics["data-analytics-title"];

      const modalCloseButton = document.querySelector(
        `div[data-analytics-activitymap-region-id="${modalActivityMapRegionId}"] button[data-analytics-title="${modalCloseButtonTitle}"][aria-label="Close Modal"]`
      );

      if (modalCloseButton === null) {
        throw new Error("Modal close button not found");
      }

      expect(modalCloseButton.getAttribute("data-analytics-title")).toBe(
        INCENTIVIZE_MOMENT_DATA.items[0].modalContent.analytics[
          "data-analytics-title"
        ]
      );

      expect(modalCloseButton.getAttribute("data-analytics-click")).toBe(
        INCENTIVIZE_MOMENT_DATA.items[0].modalContent.analytics[
          "data-analytics-click"
        ]
      );
    });
  });
});
