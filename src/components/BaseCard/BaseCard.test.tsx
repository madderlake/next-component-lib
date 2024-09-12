import { render } from "@testing-library/react";

import { BaseCard } from "./BaseCard";

describe("BaseCard Props", () => {
  it("children", () => {
    const { container } = render(<BaseCard>Hello</BaseCard>);

    expect(container).toHaveTextContent("Hello");
  });

  // Scenario: Region tracking on card (rdar://110033728)
  describe("analytics", () => {
    it("has a region", () => {
      const analytics = {
        "data-analytics-activitymap-region-id": "region-name",
      };
      const { container } = render(
        <BaseCard analytics={analytics}>Hello</BaseCard>
      );
      expect(
        container.querySelector("[data-analytics-activitymap-region-id]")
      ).toBeInTheDocument();
    });
  });
});
