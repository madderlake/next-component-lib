// The pure version of testing-library does not automatically cleanup after each test.
import { cleanup, render, screen } from "@testing-library/react/pure";
import { selectModal } from "@/lib/tests/selectors";

import { Modal } from "./Modal";

const modalAnalytics = {
  "data-analytics-activitymap-region-id": "test-region-id",
  "data-analytics-title": "test analytics title",
  "data-analytics-click": "prop3: close modal",
};

describe("Modal Analytics", () => {
  let modalRoot: Element | null | undefined = null;

  beforeEach(() => {
    render(
      <Modal
        isOpen={true}
        role="dialog"
        headline="test headline"
        topicLabel="test topic label"
        analytics={modalAnalytics}
      >
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Modal>,
    );

    modalRoot = selectModal(screen);
  });

  afterEach(() => {
    cleanup();
  });

  // Scenario: Region tracking on modal (rdar://110067602)
  it("modal root region", () => {
    expect(
      modalRoot?.getAttribute("data-analytics-activitymap-region-id"),
    ).toBe("test-region-id");
  });

  // Scenario: Click tracking on close button (rdar://110067605)
  it("close button click", () => {
    const closeButton = modalRoot?.querySelector("button");
    expect(closeButton?.getAttribute("data-analytics-title")).toBe(
      "test analytics title",
    );
    expect(closeButton?.getAttribute("data-analytics-click")).toBe(
      "prop3: close modal",
    );
  });
});
