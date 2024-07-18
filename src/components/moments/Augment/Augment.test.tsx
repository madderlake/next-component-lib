import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import { IMAGE_DATA } from "@/components/ImageAccordion/imageData";

import { Augment } from "./Augment";
import { AUGMENT_MOMENT_DATA } from "./Augment.data";

describe("Augment Section", () => {
  let renderResult: RenderResult;

  beforeEach(async () => {
    const MOCK_DATA = {
      ...AUGMENT_MOMENT_DATA,
      analytics: {
        "data-analytics-section-engagement": "test section engagement",
        "data-analytics-region": "test augment region",
        "data-analytics-gallery-id": "test gallery id",
      },
      items: [
        {
          headline: <>Test Accordion Headline</>,
          content: <>Test Accordion Content</>,
          analytics: {
            "data-analytics-click": "test accordion click",
            "data-analytics-title": "test-accordion-title",
            "data-analytics-activitymap-region-id": "test-accordion-region",
          },
          images: Object.values(IMAGE_DATA.tab1),
        },
      ],
    };
    renderResult = await render(<Augment {...MOCK_DATA} />);
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    // Scenario: Section engagement tracking on the Augment Section (rdar://113507492)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test section engagement");
    });

    // Scenario: Optional Region tracking on the Augment Section (rdar://113587975)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test augment region"
      );
    });

    // Scenario: Click tracking on Accordion item on the Augment Section (rdar://113508852)
    it("should have click tracking on accordion item", async () => {
      const accordionItem = (
        await renderResult.findByText("Test Accordion Headline")
      ).closest("button");

      expect(accordionItem?.getAttribute("data-analytics-click")).toBe(
        "test accordion click"
      );
      expect(accordionItem?.getAttribute("data-analytics-title")).toBe(
        "test-accordion-title"
      );
    });

    // Scenario: Optional ActivityMap Region tracking on Accordion item on the Augment Section (rdar://113509194)
    it("should have optional activity map region tracking on accordion item", async () => {
      const accordionItem = (
        await renderResult.findByText("Test Accordion Headline")
      ).closest("button");

      expect(
        accordionItem?.getAttribute("data-analytics-activitymap-region-id")
      ).toBe("test-accordion-region");
    });
  });
});
