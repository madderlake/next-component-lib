import { cleanup, render, screen } from "@testing-library/react";
import { selectModal } from "@/lib/tests/selectors";

import { IconCardTermsModal } from "./IconCardTermsModal";

describe("IconCardTermsModal", () => {
  let modal: Element | null = null;

  beforeEach(() => {
    const props = {
      role: "dialog",
      topicLabel: "test topic Label",
      headline: "test headline",
      inlineHeader: "test inline header",
      link: {
        children: "test link",
        href: "#",
        analytics: {
          "data-analytics-title": "lorem ipsum title",
        },
      },
    };

    render(<IconCardTermsModal isOpen={true} {...props} />);
    modal = selectModal(screen);
  });

  afterAll(() => {
    cleanup();
  });

  describe("Analytics", () => {
    it("should have analytics-title", () => {
      const link = modal?.querySelector("a");

      expect(link).toHaveAttribute("data-analytics-title");

      expect(link?.getAttribute("data-analytics-title")).toBe(
        "lorem ipsum title",
      );
    });
  });
});
