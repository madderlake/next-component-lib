import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import type { StandardsLinkProps } from "./StandardsLink";
import { StandardsLink } from "./StandardsLink";

export default {
  title: "components/StandardsLink",
  component: StandardsLink,
} satisfies Meta<typeof StandardsLink>;

const wrapperStyles = {
  backgroundColor: "#f5f5f7",
  padding: 20,
  margin: 20,
};

const Template: StoryFn<StandardsLinkProps> = (
  args,
  { globals: { direction } }
) => (
  <div style={wrapperStyles}>
    <h3 style={{ color: "#6e6e73", marginBottom: 15 }}>
      Standards Link ({direction.toUpperCase()} container)
    </h3>
    <StandardsLink {...args} />
  </div>
);

export const Example: StoryFn = Template.bind({});

const args: StandardsLinkProps = {
  children: "Learn more",
  href: "#",
  icon: "more",
  position: "after",
};

Example.storyName = "StandardsLink";
Example.args = args;
