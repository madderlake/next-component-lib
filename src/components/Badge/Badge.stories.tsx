import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { BadgeProps } from "./Badge";
import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} satisfies Meta<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args) => (
  <p style={{ margin: "10px 0 0 5px" }}>
    {args.shape === "inline" && "Some text inline..."}
    <Badge {...args} />
  </p>
);

export const Example: StoryFn = Template.bind({});

Example.storyName = "Badge";
Example.args = {
  children: "Coming soon",
  framed: true,
  shape: "none",
};
