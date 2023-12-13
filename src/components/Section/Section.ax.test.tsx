import { render } from "@testing-library/react";
import { axe } from "jest-axe";

import { Section } from "@/components/Section/Section";

describe("Section Accessibility", () => {
  it("should not have any violations", async () => {
    const { container } = render(<Section>Hello!</Section>);

    const axResults = await axe(container);
    expect(axResults).toHaveNoViolations();
  });
});
