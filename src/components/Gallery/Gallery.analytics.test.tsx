/* eslint-disable max-lines-per-function */
/* eslint-disable max-nested-callbacks */
import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { act, cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { SyntheticEvent } from "react";
import React from "react";
import { vi } from "vitest";

import { GALLERY_CREATED, GALLERY_INTERACTED } from "@/lib/analyticsUtils";

import { Gallery } from "./Gallery";

const MockGalleryCard = ({ text }: { text: string }): JSX.Element => (
  <div>{text}</div>
);

const items = [
  {
    text: "item 1",
    analytics: {
      "data-analytics-gallery-item-id": "gallery-item-1",
    },
  },
  {
    text: "item 2",
    analytics: {
      "data-analytics-gallery-item-id": "gallery-item-2",
    },
  },
  {
    text: "item 3",
    analytics: {
      "data-analytics-gallery-item-id": "gallery-item-3",
    },
  },
];

const mockHandleGalleryCreation = vi.fn(
  (
    event: CustomEvent<{
      galleryId: string;
      galleryItems: string[];
    }>
  ) => {
    return event.detail;
  }
);

const mockHandleGalleryInteraction = vi.fn(
  (
    event: CustomEvent<{
      galleryId: string;
      indx: number;
      interactionEvent?: SyntheticEvent | KeyboardEvent;
    }>
  ) => {
    return event.detail;
  }
);

// eslint-disable-next-line max-lines-per-function
describe("Gallery Analytics", () => {
  let renderResult: RenderResult;

  const renderGallery = async (): Promise<void> => {
    await act(async () => {
      const itemAnalyticsIds = items.map(
        (item) => item.analytics["data-analytics-gallery-item-id"]
      );
      renderResult = await render(
        <Gallery
          analytics={{ "data-analytics-gallery-id": "test-gallery" }}
          itemAnalyticsIds={itemAnalyticsIds}
        >
          {items.map((item, i) => (
            <MockGalleryCard key={i} text={item.text} />
          ))}
        </Gallery>
      );
    });
  };

  afterAll(() => {
    cleanup();
    mockHandleGalleryCreation.mockClear();
  });

  // Scenario: Gallery ID on top-level div (rdar://110068293)
  it("contains analytics gallery id at Gallery top level div", async () => {
    await renderGallery();
    const { container } = renderResult;
    const galleryRootDiv = container.firstChild as HTMLElement;
    expect(galleryRootDiv.getAttribute("data-analytics-gallery-id")).toBe(
      "test-gallery"
    );
  });

  // Scenario: Gallery Item ID on each GalleryItem (rdar://110068287)
  it("each gallery item in the Gallery component has analytics gallery item id attribute", async () => {
    await renderGallery();
    const { container } = renderResult;
    const galleryItems = container.querySelector(".itemContainer")?.children;

    if (galleryItems !== undefined) {
      Array.from(galleryItems).forEach((galleryItem, i) => {
        expect(galleryItem.getAttribute("data-analytics-gallery-item-id")).toBe(
          items[i].analytics["data-analytics-gallery-item-id"]
        );
      });
    } else {
      fail("Couldn't find gallery items");
    }
    mockHandleGalleryCreation.mockClear();
    mockHandleGalleryInteraction.mockClear();
  });

  // Scenario: Gallery creation is manually tracked (rdar://113223798)
  it("should manually track gallery creation", async () => {
    // catch custom gallery created event with a mock function
    window.addEventListener(GALLERY_CREATED, ((e) =>
      mockHandleGalleryCreation(
        e as CustomEvent<{
          galleryId: string;
          galleryItems: string[];
        }>
      )) as EventListener);

    await renderGallery();
    expect(mockHandleGalleryCreation.mock.results[0].value).toStrictEqual({
      galleryId: "test-gallery",
      galleryItems: ["gallery-item-1", "gallery-item-2", "gallery-item-3"],
    });
  });

  // Scenario: Gallery interaction is manually tracked (rdar://113340980)
  it("should manually track gallery interaction", async () => {
    // catch custom gallery interacted event with a mock function
    window.addEventListener(GALLERY_INTERACTED, ((e) =>
      mockHandleGalleryInteraction(
        e as CustomEvent<{
          galleryId: string;
          indx: number;
          interactionEvent?: SyntheticEvent | KeyboardEvent;
        }>
      )) as EventListener);

    const user = userEvent.setup();

    await renderGallery();
    const { container } = renderResult;
    const nextButton = container.querySelector('[aria-label="Next"]');
    if (nextButton !== null) {
      await user.click(nextButton);

      if (mockHandleGalleryInteraction.mock.results[0] === undefined) {
        fail("Gallery interaction analytics event was not invoked");
      }

      expect(mockHandleGalleryInteraction.mock.results[0].value).toMatchObject({
        galleryId: "test-gallery",
        indx: 1,
      });
      expect(
        mockHandleGalleryInteraction.mock.results[0].value.interactionEvent.type
      ).toBe("click");
    } else {
      fail("PaddleNav next button not found");
    }
  });

  // Scenario: Paddle Nav interaction type on Paddle Nav container (rdar://110068282)
  it("should have interaction type on interaction container", async () => {
    await renderGallery();
    const { container } = renderResult;
    const paddleNav = container.querySelector(
      '[data-analytics-gallery-interaction-type="paddlenav"]'
    );

    expect(
      paddleNav?.getAttribute("data-analytics-gallery-interaction-type")
    ).toBe("paddlenav");
  });
});
