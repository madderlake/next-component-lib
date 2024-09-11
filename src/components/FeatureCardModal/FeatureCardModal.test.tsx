import { cleanup, render, screen } from "@testing-library/react";

import { selectModal } from "@/lib/tests/selectors";

import {
  type FeatureCardModalProps,
  FeatureCardModal,
} from "./FeatureCardModal";

describe("FeatureCardModal Props", () => {
  let modalRoot: Element | null | undefined = null;

  beforeEach(() => {
    const props: FeatureCardModalProps = {
      content: <h1>Feature Card modal #1</h1>,
      topicLabel: "test topic label",
      headline: "test headline",
      role: "dialog",
      isOpen: true,
      analytics: {
        "data-analytics-activitymap-region-id": "test activitymap-region-name",
        "data-analytics-click": "test close button click",
        "data-analytics-title": "test close button title",
      },
    };

    render(<FeatureCardModal {...props}></FeatureCardModal>);

    modalRoot = selectModal(screen);
  });

  afterAll(() => {
    cleanup();
  });

  describe("analytics", () => {
    // Scenario: ActivityMap Region tracking on card (rdar://110073634)
    it("should have activitymap-region", () => {
      expect(
        modalRoot?.getAttribute("data-analytics-activitymap-region-id"),
      ).toBe("test activitymap-region-name");
    });

    // Scenario: Click tracking on card (rdar://110074422)
    it("should have analytics-click and analytics-title on the close button click", () => {
      const closeButton = modalRoot?.querySelector("button");
      expect(closeButton?.getAttribute("data-analytics-click")).toBe(
        "test close button click",
      );

      expect(closeButton?.getAttribute("data-analytics-title")).toBe(
        "test close button title",
      );
    });
  });
});
