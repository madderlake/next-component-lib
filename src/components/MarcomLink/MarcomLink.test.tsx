import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";

import { MarcomLink } from "./MarcomLink";

describe("MarcomLink Props", () => {
  let renderResult: RenderResult;

  beforeEach(() => {
    renderResult = render(
      <MarcomLink
        analytics={{
          "data-analytics-title": "test title",
          "data-analytics-exit-link": true,
        }}
        href="#"
        nofollow={true}
      >
        Learn more
      </MarcomLink>
    );
  });

  afterAll(() => {
    cleanup();
  });

  it("children", () => {
    const { container } = renderResult;

    expect(container).toHaveTextContent("Learn more");
  });

  it("nofollow", () => {
    const { container } = renderResult;

    const marcomLink = container.querySelector("a");

    expect(marcomLink).toHaveAttribute("rel");

    expect(marcomLink?.getAttribute("rel")).toEqual("nofollow");
  });

  // Scenario: Link tracking on the same domain (rdar://110067913)
  // Scenario: Link tracking for download links (rdar://110067914)
  // Scenario: Link tracking on a subdomain or foreign domain (rdar://110067922)
  describe("Analytics", () => {
    it("should have analytics-tile and analytics-exit-link", () => {
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
