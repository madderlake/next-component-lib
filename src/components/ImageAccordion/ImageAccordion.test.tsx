import { cleanup, render } from "@testing-library/react";

import type { ImageAccordionProps } from "./ImageAccordion";
import { ImageAccordion } from "./ImageAccordion";

// eslint-disable-next-line max-lines-per-function
describe("ImageAccordion analytics", () => {
  let button0: HTMLButtonElement;
  let button1: HTMLButtonElement;

  beforeEach(() => {
    const imageData = {
      xlarge_2x: {
        viewport: "xlarge",
        density: 2,
        width: 1,
        height: 1,
        src: "",
      },
    };

    const items: ImageAccordionProps["items"] = [
      {
        headline: "test headline 1",
        content: "test content 1",
        images: Object.values(imageData),
        analytics: {
          "data-analytics-click": "test click accordion item A",
          "data-analytics-title": "test title accordion item A",
          "data-analytics-activitymap-region-id": "test activitymap-region A",
        },
      },
      {
        headline: "test headline 2",
        content: "test content 2",
        images: Object.values(imageData),
        analytics: {
          "data-analytics-click": "test click accordion item B",
          "data-analytics-title": "test title accordion item B",
          "data-analytics-activitymap-region-id": "test activitymap-region B",
        },
      },
    ];

    const { container } = render(
      <ImageAccordion items={items}></ImageAccordion>
    );

    const buttons = container.querySelectorAll("button");
    button0 = buttons[0];
    button1 = buttons[1];
  });

  afterAll(() => {
    cleanup();
  });

  // Scenario: Click tracking on accordion item (rdar://109842420)
  it("should have a analytics-click", () => {
    expect(button0).toHaveAttribute("data-analytics-click");
    expect(button0?.getAttribute("data-analytics-click")).toEqual(
      "test click accordion item A"
    );

    expect(button1).toHaveAttribute("data-analytics-click");
    expect(button1?.getAttribute("data-analytics-click")).toEqual(
      "test click accordion item B"
    );
  });

  // Intrapage link on accordion item (rdar://110651596)
  it("should have a analytics-intrapage-link", () => {
    expect(button0).toHaveAttribute("data-analytics-intrapage-link");
    expect(button1).toHaveAttribute("data-analytics-intrapage-link");
  });

  // Scenario: Optional title tracking on accordion item (rdar://110651743)
  it("should have a analytics-title", () => {
    expect(button0).toHaveAttribute("data-analytics-title");
    expect(button0?.getAttribute("data-analytics-title")).toEqual(
      "test title accordion item A"
    );

    expect(button1).toHaveAttribute("data-analytics-title");
    expect(button1?.getAttribute("data-analytics-title")).toEqual(
      "test title accordion item B"
    );
  });

  // Scenario: Optional Activitymap region tracking on accordion item (rdar://110651849)
  it("should have a analytics-activitymap-region-id", () => {
    expect(button0).toHaveAttribute("data-analytics-activitymap-region-id");
    expect(
      button0?.getAttribute("data-analytics-activitymap-region-id")
    ).toEqual("test activitymap-region A");

    expect(button1).toHaveAttribute("data-analytics-activitymap-region-id");
    expect(
      button1?.getAttribute("data-analytics-activitymap-region-id")
    ).toEqual("test activitymap-region B");
  });
});
