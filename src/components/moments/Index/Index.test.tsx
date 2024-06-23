import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import type { IndexSectionProps } from "./Index";
import { IndexSection } from "./Index";

// eslint-disable-next-line max-lines-per-function
describe("Index Section", () => {
  let renderResult: RenderResult;

  const props: IndexSectionProps = {
    title: "test title",
    indexData: {
      groups: [
        {
          header: "test group 1",
          elevatedLinks: [
            {
              href: "#",
              text: "link elevated text group 1",
              analytics: {
                "data-analytics-title": "elevated group 1",
              },
            },
          ],
          baseLinks: [
            {
              href: "#",
              text: "link text group 1",
              analytics: {
                "data-analytics-title": "base group 1",
              },
            },
          ],
        },
        {
          header: "test group 2",
          baseLinks: [
            {
              href: "#",
              text: "link text group 2",
              analytics: {
                "data-analytics-title": "base group 2",
              },
            },
          ],
        },
        {
          header: "test group 3",
          baseLinks: [
            {
              href: "#",
              text: "link text group 3",
              analytics: {
                "data-analytics-title": "base group 2",
              },
            },
          ],
        },
      ],
    },
    analytics: {
      "data-analytics-section-engagement": "test index section engagement",
      "data-analytics-region": "test index region",
    },
  };

  beforeEach(() => {
    renderResult = render(<IndexSection {...props} />);
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    // Scenario: Section engagement tracking on Index moment (rdar://110142957)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test index section engagement");
    });

    // Scenario: Optional Region tracking on Index moment (rdar://112665250)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test index region"
      );
    });
  });
});
