import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <SectionHeader
        title="Hello Title"
        link={{
          href: "#",
          nofollow: true,
          analytics: {
            "data-analytics-title": "test title",
            "data-analytics-exit-link": true,
          },
        }}
      />
    );
  });

  afterAll(() => {
    cleanup();
  });

  describe("SEO", () => {
    it("nofollow", () => {
      const { container } = renderResult;

      const marcomLink = container.querySelector("a");

      expect(marcomLink).toHaveAttribute("rel");

      expect(marcomLink?.getAttribute("rel")).toEqual("nofollow");
    });
  });

  describe("Analytics", () => {
    it("should have analytics attributes", () => {
      const { container } = renderResult;

      const marcomLink = container.querySelector("[data-analytics-title]");

      expect(marcomLink).toHaveAttribute("data-analytics-title");

      expect(marcomLink?.getAttribute("data-analytics-title")).toEqual(
        "test title"
      );

      expect(marcomLink).toHaveAttribute("data-analytics-exit-link");

      // remove this test if 'data-analytics-exit-link' is not set to a boolean in the future
      expect(marcomLink?.getAttribute("data-analytics-exit-link")).toEqual(
        "true"
      );
    });
  });
});
