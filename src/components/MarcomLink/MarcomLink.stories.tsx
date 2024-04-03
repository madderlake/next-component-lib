import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { MarcomLinkProps } from "./MarcomLink";
import { MarcomLink } from "./MarcomLink";

export default {
  title: "components/MarcomLink",
  component: MarcomLink,
} satisfies Meta<typeof MarcomLink>;

const wrapperStyles = {
  backgroundColor: "#f5f5f7",
  padding: 20,
  margin: 20,
};

const Template: StoryFn<MarcomLinkProps> = (
  args,
  { globals: { direction } }
) => (
  <div style={wrapperStyles}>
    <h3 style={{ color: "#6e6e73", marginBottom: 15 }}>
      Marcom Link ({direction.toUpperCase()})
    </h3>
    <MarcomLink {...args} />
  </div>
);

export const Example: StoryFn<MarcomLinkProps> = Template.bind({});

const args: MarcomLinkProps = {
  analytics: {
    "data-analytics-title": "learn more",
    "data-analytics-exit-link": true,
  },
  ariaLabel: "Some aria label text",
  children: "Learn more",
  href: "#",
  icon: "external",
  nofollow: true,
  position: "after",
};

Example.storyName = "MarcomLink";
Example.args = args;
