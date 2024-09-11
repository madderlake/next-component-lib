import { cleanup, render, screen } from "@testing-library/react";
import { selectModal } from "@/lib/tests/selectors";

import { IconCardTableModal } from "./IconCardTableModal";

describe("IconCardTableModal", () => {
  let modal: Element | null = null;

  beforeEach(() => {
    const props = {
      role: "dialog",
      topicLabel: "test topic Label",
      headline: "test headline",
      inlineHeader: "test inline header",
      link: {
        children: "Optional link",
        href: "#",
        analytics: {
          "data-analytics-title": "test link title",
        },
      },
      columnALabel: "Column A Label",
      columnBLabel: "Column B Label",
      items: [
        {
          columnA: "Column item",
          columnB: "Column item",
        },
      ],
    };

    render(<IconCardTableModal isOpen={true} {...props} />);
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
        "test link title",
      );
    });
  });
});
