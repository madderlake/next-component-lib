import { cleanup, render, screen } from "@testing-library/react";
import { selectModal } from "@/lib/tests/selectors";

import { IconCardTextModal } from "./IconCardTextModal";

describe("IconCardTextModal", () => {
  let modal: Element | null = null;

  beforeEach(() => {
    const props = {
      role: "dialog",
      topicLabel: "test topic Label",
      headline: "test headline",
      textItems: [
        {
          inlineHeader: "test inline header",
          bodyCopy: "test body copy",
        },
      ],
      link: {
        children: "Optional link",
        href: "#",
        analytics: {
          "data-analytics-title": "lorem ipsum title",
        },
      },
    };

    render(<IconCardTextModal isOpen={true} {...props} />);
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
