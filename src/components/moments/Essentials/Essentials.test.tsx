/* eslint-disable max-nested-callbacks */
/* eslint-disable max-lines-per-function */
import "@testing-library/jest-dom";

import {
  type RenderResult,
  act,
  cleanup,
  render,
} from "@testing-library/react";
import { type Mock, vi } from "vitest";
import React from "react";

import { useViewport } from "@/hooks/viewport/useViewport";

import type { EssentialsProps } from "./Essentials";
import { Essentials } from "./Essentials";
import { ESSENTIALS_MOMENT_DATA } from "./Essentials.data";

describe("Essentials Section", () => {
  describe("Analytics", () => {
    let renderResult: RenderResult;
    const renderEssentials = async (): Promise<void> =>
      await act(async () => {
        const props: EssentialsProps = {
          ...ESSENTIALS_MOMENT_DATA,
          sectionHeaderLink: {
            children: "header link",
            href: "#",
            analytics: {
              "data-analytics-title": "test header link title",
            },
          },
          analytics: {
            "data-analytics-gallery-id": "test-essentials-gallery",
            "data-analytics-section-engagement": "test section engagement",
            "data-analytics-region": "test essentials region",
          },
        };
        renderResult = await render(<Essentials {...props} />);
      });

    // Mock viewport function so we can manipulate viewport size for validation tests
    vi.mock("@/hooks/viewport/useViewport", () => ({
      useViewport: vi.fn(),
    }));

    beforeEach(async () => {
      (useViewport as Mock).mockImplementationOnce(() => ({ name: "large" }));
      await renderEssentials();
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    afterAll(() => {
      cleanup();
    });

    // Scenario: Section engagement tracking on Essentials moment (rdar://113574788)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test section engagement");
    });

    // Scenario: Optional Region tracking on Essentials moment (rdar://113574714)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test essentials region"
      );
    });

    // Scenario: Link tracking on SectionHeader link (rdar://113575445)
    it("should have analytics-title on SectionHeader link", () => {
      const { container } = renderResult;
      const sectionHeaderLink = container.querySelector("section a");

      expect(sectionHeaderLink).toHaveAttribute("data-analytics-title");

      expect(sectionHeaderLink?.getAttribute("data-analytics-title")).toEqual(
        "test header link title"
      );
    });

    // Scenario: Gallery tracking on the Essentials Section (rdar://113575993)
    it("should have gallery analytics", async () => {
      // Change viewport to small in order for gallery to be rendered
      (useViewport as Mock).mockImplementationOnce(() => ({ name: "small" }));

      await renderEssentials();
      const { container } = renderResult;

      const galleryRootDiv = container.querySelector(".gallery");

      if (galleryRootDiv === null) {
        fail("Gallery not found");
      }

      expect(galleryRootDiv.getAttribute("data-analytics-gallery-id")).toBe(
        "test-essentials-gallery"
      );

      const galleryItems =
        galleryRootDiv.querySelector(".itemContainer")?.children;

      if (galleryItems === undefined) {
        fail("Gallery items not found");
      }

      Array.from(galleryItems).forEach((galleryItem, i) => {
        expect(galleryItem.getAttribute("data-analytics-gallery-item-id")).toBe(
          ESSENTIALS_MOMENT_DATA.items[i].analytics[
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
