import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import type { EssentialCardProps } from "./EssentialCard";
import { EssentialCard } from "./EssentialCard";

// eslint-disable-next-line max-lines-per-function
describe("EssentialCard Props", () => {
  let renderResult: RenderResult;

  const props: EssentialCardProps = {
    copy: "test copy",
    header: "test headline",
    images: [],
    link: {
      children: "Learn more",
      href: "/test",
      analytics: { "data-analytics-title": "pencil title" },
    },
    badge: "Coming soon",
    analytics: {
      "data-analytics-activitymap-region-id": "test activitymap",
    },
  };

  beforeEach(() => {
    renderResult = render(<EssentialCard {...props} />);
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    // Optional ActivityMap region to uniquely describe the card within this section (rdar://110908766)
    it("should have analytics-activitymap-region-id on root element", () => {
      const { container } = renderResult;

      const rootElement = container.querySelector(
        "[data-analytics-activitymap-region-id]",
      );

      expect(rootElement).toBeInTheDocument();

      expect(
        rootElement?.getAttribute("data-analytics-activitymap-region-id"),
      ).toEqual("test activitymap");
    });

    // Title link tracking on essential card block link (rdar://110909087)
    it("should have analytics-title on BlockLink", () => {
      const { container } = renderResult;

      const blockLink = container.querySelector(".blockLink");

      expect(blockLink).toHaveAttribute("data-analytics-title");

      expect(blockLink?.getAttribute("data-analytics-title")).toEqual(
        "pencil title",
      );
    });

    // Title link tracking on primary CTA (MarcomLink (rdar://110909147)
    it("should have analytics-tile on MarcomLink", () => {
      const { container } = renderResult;

      const marcomLink = container.querySelector(".link");

      expect(marcomLink).toHaveAttribute("data-analytics-title");

      expect(marcomLink?.getAttribute("data-analytics-title")).toEqual(
        "pencil title",
      );
    });
  });
});
