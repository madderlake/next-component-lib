import "@testing-library/jest-dom";

import type { RenderResult } from "@testing-library/react";
import { cleanup, render } from "@testing-library/react";
import { vi } from "vitest";

import type { WelcomeProps } from "./Welcome";
import { Welcome } from "./Welcome";

vi.mock("@/hooks/inlineVideo/useInlineVideo", () => {
  return {
    useInlineVideo: () => ({
      hasLoaded: true,
      isPlaying: false,
      play: vi.fn(),
      pause: vi.fn(),
    }),
  };
});

// eslint-disable-next-line max-lines-per-function
describe("Welcome Section", () => {
  let renderResult: RenderResult;

  const props: WelcomeProps = {
    title: "test title",
    description: "test description",
    videoSrc: [],
    analytics: {
      "data-analytics-section-engagement": "test welcome section engagement",
      "data-analytics-region": "test welcome region",
    },
    videoAnalytics: {
      "data-analytics-click": "test click",
      "data-analytics-title": "test title",
    },
    controlAriaLabels: {
      play: "test play",
      pause: "test pause",
      loading: "test loading",
    },
    videoAriaLabel: "Welcome video label",
    fallbackImages: [],
  };

  beforeEach(() => {
    renderResult = render(<Welcome {...props} />);
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    // Scenario: Section engagement tracking on Welcome moment (rdar://113507303)
    it("should have analytics-section-engagement", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-section-engagement");

      expect(
        section?.getAttribute("data-analytics-section-engagement")
      ).toEqual("test welcome section engagement");
    });

    // Scenario: Optional Region tracking on Welcome moment (rdar://113509016)
    it("should have analytics-region", () => {
      const { container } = renderResult;
      const section = container.querySelector("section");

      expect(section).toHaveAttribute("data-analytics-region");

      expect(section?.getAttribute("data-analytics-region")).toEqual(
        "test welcome region"
      );
    });
  });
});
