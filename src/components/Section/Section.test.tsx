import { render } from "@testing-library/react";

import { Section } from "./Section";

describe("Section Props", () => {
  it("children", () => {
    const { container } = render(<Section>Hello!</Section>);

    expect(container).toHaveTextContent("Hello!");
  });
});

// Scenario: Section engagement tracking (rdar://110033640)
describe("analytics", () => {
  it("section engagement", () => {
    const analyticsAttributes = {
      "data-analytics-section-engagement": "name: section name",
    };
    const { container } = render(
      <Section analytics={analyticsAttributes}>Sample Section</Section>
    );

    const section = container.firstElementChild;

    expect(section).toHaveAttribute("data-analytics-section-engagement");

    expect(section?.getAttribute("data-analytics-section-engagement")).toEqual(
      "name: section name"
    );
  });

  it("region", () => {
    const analyticsAttributes = {
      "data-analytics-section-engagement": "name: section name",
      "data-analytics-region": "section region",
    };
    const { container } = render(
      <Section analytics={analyticsAttributes}>Sample Section</Section>
    );

    const section = container.firstElementChild;

    expect(section).toHaveAttribute("data-analytics-region");

    expect(section?.getAttribute("data-analytics-region")).toEqual(
      "section region"
    );
  });
});
